"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BufferMap_1 = __importDefault(require("./BufferMap"));
class BufferManagerWorker {
    getOperatingConfig() {
        return this.agentConfig;
    }
    constructor(agentConfig, ctUrl) {
        this.bufferMap = new BufferMap_1.default();
        this.agentConfig = agentConfig;
        this.ctUrl = ctUrl;
        if (agentConfig) {
            this.bufferSyncExecutorService = setInterval(() => {
                this.syncForKeys();
            }, agentConfig.getBufferSyncFreqInSec() * 1000);
        }
    }
    shutdown() {
        if (this.bufferSyncExecutorService) {
            clearInterval(this.bufferSyncExecutorService);
        }
        this.cleanUpBufferMap();
        return true;
    }
    cleanUpBufferMap() {
        this.syncForKeys();
        let keys = this.bufferMap
            .getBufferMap()
            .keys();
        if (keys) {
            for (let key of keys) {
                let buffer = this.bufferMap.getBuffer(key);
                if (buffer) {
                    buffer.clear();
                }
            }
            this.bufferMap.clear();
        }
    }
    getUri() {
        return "/api/v1/data-ingestion/api-sample";
    }
    syncForKeys() {
        let keys = this.bufferMap
            .getBufferMap()
            .keys();
        if (keys) {
            for (let key of keys) {
                this.syncForKey(key);
            }
        }
    }
}
exports.default = BufferManagerWorker;
