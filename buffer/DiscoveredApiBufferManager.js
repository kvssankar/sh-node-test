"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractBufferManager_1 = __importDefault(require("./AbstractBufferManager"));
const DiscoveredApiBufferManagerWorker_1 = __importDefault(require("./DiscoveredApiBufferManagerWorker"));
class DiscoveredApiBufferManager extends AbstractBufferManager_1.default {
    constructor(configManager, ctUrl) {
        super(configManager);
        this.ctUrl = ctUrl;
    }
    createWorker(agentConfig) {
        return new DiscoveredApiBufferManagerWorker_1.default(agentConfig, this.ctUrl);
    }
}
exports.default = DiscoveredApiBufferManager;
