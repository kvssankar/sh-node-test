"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BufferManagerWorker_1 = __importDefault(require("./BufferManagerWorker"));
const AgentConfig_1 = __importDefault(require("../common/data/AgentConfig"));
class NoOpBufferManagerWorker extends BufferManagerWorker_1.default {
    constructor() {
        super(null, null);
        this.config = AgentConfig_1.default.noOpAgentConfig;
    }
    init() {
        return true;
    }
    canOffer(key) {
        return false;
    }
    offer(key, apiSample) {
        return false;
    }
    offerByKey(key, apiSample) {
        return false;
    }
    canOfferByKey(key) {
        return false;
    }
    getOperatingConfig() {
        return this.config;
    }
    offerByApiBufferKey(apiBufferKey, apiSample) {
        return false;
    }
    canOfferByApiBufferKey(apiBufferKey) {
        return false;
    }
    shutdown() {
        return true;
    }
    syncForKey(key) {
        return;
    }
}
exports.default = NoOpBufferManagerWorker;
