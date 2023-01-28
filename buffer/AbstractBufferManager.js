"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NoOpBufferManagerWorker_1 = __importDefault(require("./NoOpBufferManagerWorker"));
class AbstractBufferManager {
    constructor(configManager) {
        this.configManager = configManager;
        this.dummyWorker = new NoOpBufferManagerWorker_1.default();
        this.worker = this.dummyWorker;
    }
    onErroneousConfigUpdate() {
        if (this.worker) {
            let oldBuffer = this.worker;
            this.worker = this.dummyWorker;
            oldBuffer.shutdown();
        }
    }
    onSuccessfulConfigUpdate(agentConfig) {
        if (!this.worker)
            return;
        if (!this.worker.getOperatingConfig())
            return;
        // @ts-ignore
        if (this.isRefreshNeeded(this.worker.getOperatingConfig(), agentConfig)) {
            let oldBufferManagerWorker = this.worker;
            this.worker = this.createWorker(agentConfig);
            oldBufferManagerWorker.shutdown();
        }
    }
    init() {
        return this.configManager.subscribeToUpdates(this);
    }
    shutdown() {
        if (this.worker) {
            this.worker.shutdown();
            this.worker = null;
        }
        return true;
    }
    isRefreshNeeded(olderConfig, newConfig) {
        if (newConfig.getTimestamp().getTime() === 0 &&
            olderConfig.getTimestamp().getTime() === 0) {
            return false;
        }
        return (newConfig.getTimestamp().getTime() > olderConfig.getTimestamp().getTime());
    }
    getWorker() {
        return this.worker;
    }
}
exports.default = AbstractBufferManager;
