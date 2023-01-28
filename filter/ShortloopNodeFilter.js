"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AgentConfig_1 = __importDefault(require("../common/data/AgentConfig"));
const ObservedApi_1 = __importDefault(require("../common/data/ObservedApi"));
const HttpRequest_1 = __importDefault(require("./HttpRequest"));
const RequestResponseContext_1 = __importDefault(require("./RequestResponseContext"));
const ApiBufferKey_1 = __importDefault(require("../buffer/ApiBufferKey"));
class ShortloopNodeFilter {
    constructor(configManager, apiProcessor, userApplicationName) {
        this.configManager = configManager;
        this.apiProcessor = apiProcessor;
        this.userApplicationName = userApplicationName;
    }
    init() {
        this.configManager.subscribeToUpdates(this);
        return true;
    }
    onErroneousConfigUpdate() {
        this.agentConfig = AgentConfig_1.default.noOpAgentConfig;
    }
    onSuccessfulConfigUpdate(agentConfig) {
        this.agentConfig = agentConfig;
    }
    getApiConfig(observedApi, agentConfig) {
        var _a;
        if (((_a = agentConfig === null || agentConfig === void 0 ? void 0 : agentConfig.getRegisteredApiConfigs()) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return null;
        }
        if (!this.agentConfig)
            return null;
        let registeredApis = this.agentConfig.getRegisteredApiConfigs();
        for (let i = 0; i < registeredApis.length; i++) {
            if (observedApi.matches(registeredApis[i])) {
                return registeredApis[i];
            }
        }
        return null;
    }
    getObservedApiFromRequest(request) {
        let method = request.getMethod();
        return new ObservedApi_1.default(request.getRawUri(), method);
    }
    processReqAndRes(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let agentConfigLocal = this.agentConfig;
            if (!agentConfigLocal) {
                yield next();
                return;
            }
            if ((agentConfigLocal === null || agentConfigLocal === void 0 ? void 0 : agentConfigLocal.getCaptureApiSample()) === false) {
                yield next();
                return;
            }
            let queryParams = null;
            if (req.query) {
                queryParams = Object.assign({}, req.query);
            }
            if (queryParams && Object.keys(queryParams).length > 0) {
                for (let key in queryParams) {
                    if (!Array.isArray(queryParams[key])) {
                        queryParams[key] = [queryParams[key]];
                    }
                }
            }
            let request = new HttpRequest_1.default(req.path, req.hostname, (_a = req.socket.address()) === null || _a === void 0 ? void 0 : _a.port, req.protocol, req.method, req.headers, queryParams, null);
            let observedApi = this.getObservedApiFromRequest(request);
            let context = new RequestResponseContext_1.default(request, this.userApplicationName);
            context.setObservedApi(observedApi);
            let apiConfig = this.getApiConfig(observedApi, agentConfigLocal);
            context.setAgentConfig(agentConfigLocal);
            if (apiConfig) {
                context.setApiConfig(apiConfig);
                context.setApiBufferKey(ApiBufferKey_1.default.getApiBufferKeyFromApiConfig(apiConfig));
                yield this.apiProcessor.processRegisteredApi(context, req, res, next);
            }
            else {
                context.setApiBufferKey(ApiBufferKey_1.default.getApiBufferKeyFromObservedApi(observedApi));
                yield this.apiProcessor.processDiscoveredApi(context, res, next);
            }
        });
    }
}
exports.default = ShortloopNodeFilter;
