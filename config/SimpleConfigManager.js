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
const ConfigOrError_1 = __importDefault(require("./ConfigOrError"));
const SDKVersion_1 = __importDefault(require("../SDKVersion"));
const ShortloopCommonConstant_1 = require("../common/constant/ShortloopCommonConstant");
const AgentConfigUtils_1 = __importDefault(require("../common/utils/AgentConfigUtils"));
const RequestExecutor_1 = require("../common/utils/RequestExecutor");
const SDKLogger_1 = __importDefault(require("../SDKLogger"));
class SimpleConfigManager {
    constructor(ctUrl, userApplicationName, agentId) {
        this.configUpdateListeners = [];
        this.ctUrl = ctUrl;
        this.userApplicationName = userApplicationName;
        this.agentId = agentId;
    }
    subscribeToUpdates(configUpdateListener) {
        this.configUpdateListeners.push(configUpdateListener);
        return true;
    }
    getUri() {
        return "/api/v1/agent-config";
    }
    init() {
        try {
            this.scheduleConfigRefresh(60);
            return true;
        }
        catch (e) {
            SDKLogger_1.default.error("While initializing config manager: " + e);
            return false;
        }
    }
    scheduleConfigRefresh(timeInSec) {
        this.executionerService = setTimeout(() => {
            this.fetchConfigNotify();
        }, timeInSec * 1000);
    }
    fetchConfigNotify() {
        return __awaiter(this, void 0, void 0, function* () {
            let configOrError = yield this.fetchConfig();
            if (configOrError.errorCode) {
                this.scheduleConfigRefresh(60);
                this.onUnSuccessfulConfigFetch();
            }
            else {
                if (configOrError.agentConfig) {
                    this.scheduleConfigRefresh(configOrError.agentConfig.getConfigFetchFreqInSec());
                    this.onSuccessfulConfigFetch(configOrError.agentConfig);
                }
            }
        });
    }
    onSuccessfulConfigFetch(agentConfig) {
        this.configUpdateListeners.forEach((listener) => {
            listener.onSuccessfulConfigUpdate(agentConfig);
        });
    }
    onUnSuccessfulConfigFetch() {
        this.configUpdateListeners.forEach((listener) => {
            listener.onErroneousConfigUpdate();
        });
    }
    fetchConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = {
                agentId: this.agentId,
                appName: this.userApplicationName,
            };
            // @ts-ignore
            let queryString = Object.keys(queryParams).map((key) => key + "=" + queryParams[key]).join("&");
            let headers = Object.assign({ Accept: "application/json", Connection: "close" }, SDKVersion_1.default);
            let url = this.ctUrl + this.getUri() + "?" + queryString;
            try {
                let agentConfig;
                yield (0, RequestExecutor_1.getRequest)(url, headers).then((response) => {
                    try {
                        agentConfig = new AgentConfig_1.default(JSON.parse(response));
                    }
                    catch (e) {
                        SDKLogger_1.default.error("While parsing config response: " + e);
                    }
                });
                if (agentConfig) {
                    if (AgentConfigUtils_1.default.isConfigValid(agentConfig)) {
                        return new ConfigOrError_1.default(agentConfig, null);
                    }
                    else {
                        SDKLogger_1.default.error("Config fetched successfully but invalid");
                        return new ConfigOrError_1.default(null, ShortloopCommonConstant_1.ConfigErrorCode.INVALID_CONFIG);
                    }
                }
                else {
                    return new ConfigOrError_1.default(null, ShortloopCommonConstant_1.ConfigErrorCode.INVALID_CONFIG);
                }
            }
            catch (e) {
                SDKLogger_1.default.error("Error while parsing config: " + e);
                return new ConfigOrError_1.default(null, ShortloopCommonConstant_1.ConfigErrorCode.PARSE_ERROR);
            }
        });
    }
    shutdown() {
        if (this.executionerService) {
            clearTimeout(this.executionerService);
        }
        return true;
    }
}
exports.default = SimpleConfigManager;
