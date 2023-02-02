"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BufferManagerWorker_1 = __importDefault(require("./BufferManagerWorker"));
const Semaphore_1 = __importDefault(require("../common/utils/Semaphore"));
const SimpleBuffer_1 = __importDefault(require("./SimpleBuffer"));
const RequestExecutor_1 = require("../common/utils/RequestExecutor");
const SDKLogger_1 = __importDefault(require("../SDKLogger"));
class RegisteredApiBufferManagerWorker extends BufferManagerWorker_1.default {
    constructor(config, ctUrl) {
        super(config, ctUrl);
        this.semaphore = new Semaphore_1.default(this.getRegisteredApiCountToCapture());
    }
    init() {
        return true;
    }
    offer(key, apiSample) {
        this.bufferMap.computeIfAbsent(key, new SimpleBuffer_1.default(this.getRegisteredApiBufferSize(key)));
        let buffer = this.bufferMap.getBuffer(key);
        if (!buffer) {
            return false;
        }
        return buffer.offer(apiSample);
    }
    canOffer(key) {
        var _a;
        if (!((_a = this.getOperatingConfig()) === null || _a === void 0 ? void 0 : _a.getCaptureApiSample())) {
            return false;
        }
        let bufferSize = this.getRegisteredApiBufferSize(key);
        if (bufferSize === 0) {
            return false;
        }
        let buffer = this.bufferMap.getBuffer(key);
        if (this.semaphore.tryAcquire()) {
            let canOffer;
            if (!buffer) {
                canOffer = true;
            }
            else {
                canOffer = buffer.canOffer();
            }
            this.semaphore.release();
            return canOffer;
        }
        return false;
    }
    getRegisteredApiBufferSize(apiBufferKey) {
        let agentConfig = this.getOperatingConfig();
        if (!agentConfig) {
            return 0;
        }
        if (!agentConfig.getRegisteredApiConfigs()) {
            return 0;
        }
        if (!agentConfig.getRegisteredApiConfigs().length) {
            return 0;
        }
        for (let apiConfig of agentConfig.getRegisteredApiConfigs()) {
            if (apiConfig.getMethod() === apiBufferKey.getMethod() &&
                apiConfig.getUri().equals(apiBufferKey.getUri())) {
                return apiConfig.getBufferSize();
            }
        }
        return 0;
    }
    getRegisteredApiCountToCapture() {
        let agentConfig = this.getOperatingConfig();
        if (!agentConfig) {
            return 0;
        }
        if (!agentConfig.getRegisteredApiConfigs()) {
            return 0;
        }
        if (agentConfig.getRegisteredApiConfigs().length === 0) {
            return 0;
        }
        let totalApis = 0;
        for (let apiConfig of agentConfig.getRegisteredApiConfigs()) {
            if (apiConfig.getBufferSize()) {
                totalApis += apiConfig.getBufferSize();
            }
        }
        return totalApis;
    }
    syncForKey(key) {
        try {
            let buffer = this.bufferMap.getBuffer(key);
            if (!buffer) {
                return;
            }
            let iterations = buffer.getContentCount();
            if (iterations === 0) {
                return;
            }
            while (iterations-- > 0) {
                let apiSample = buffer.poll();
                if (!apiSample) {
                    break;
                }
                (0, RequestExecutor_1.postRequest)(this.ctUrl + this.getUri(), [apiSample])
                    .then(() => {
                    console.log("Registered api sample synced successfully", apiSample);
                })
                    .catch((error) => {
                    SDKLogger_1.default.error("While sending registered api sample: " + error);
                });
            }
        }
        catch (e) {
            SDKLogger_1.default.error("While syncing registered api sample: " + e);
        }
    }
}
exports.default = RegisteredApiBufferManagerWorker;
