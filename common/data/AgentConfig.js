"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiConfig_1 = __importDefault(require("./ApiConfig"));
const BlackListRule_1 = __importDefault(require("./BlackListRule"));
class AgentConfig {
    constructor(agentConfig) {
        this.registeredApiConfigs = [];
        this.blackListRules = [];
        this.bufferSyncFreqInSec = agentConfig.bufferSyncFreqInSec;
        this.captureApiSample = agentConfig.captureApiSample;
        this.configFetchFreqInSec = agentConfig.configFetchFreqInSec;
        this.timestamp = new Date(agentConfig.timestamp);
        this.discoveryBufferSize = agentConfig.discoveryBufferSize;
        this.discoveryBufferSizePerApi = agentConfig.discoveryBufferSizePerApi;
        if (agentConfig.blackListRules) {
            this.blackListRules = agentConfig.blackListRules.map((blackListRule) => new BlackListRule_1.default(blackListRule));
        }
        if (agentConfig.registeredApiConfigs) {
            this.registeredApiConfigs = agentConfig.registeredApiConfigs.map((apiConfig) => new ApiConfig_1.default(apiConfig));
        }
    }
    getBufferSyncFreqInSec() {
        return this.bufferSyncFreqInSec;
    }
    setBufferSyncFreqInSec(bufferSyncFreqInSec) {
        this.bufferSyncFreqInSec = bufferSyncFreqInSec;
    }
    getBlackListRules() {
        return this.blackListRules;
    }
    setBlackListRules(blackListRules) {
        this.blackListRules = blackListRules;
    }
    getCaptureApiSample() {
        return this.captureApiSample;
    }
    setCaptureApiSample(captureApiSample) {
        this.captureApiSample = captureApiSample;
    }
    getConfigFetchFreqInSec() {
        return this.configFetchFreqInSec;
    }
    setConfigFetchFreqInSec(configFetchFreqInSec) {
        this.configFetchFreqInSec = configFetchFreqInSec;
    }
    getRegisteredApiConfigs() {
        return this.registeredApiConfigs;
    }
    setRegisteredApiConfigs(registeredApiConfigs) {
        this.registeredApiConfigs = registeredApiConfigs;
    }
    getTimestamp() {
        return this.timestamp;
    }
    setTimestamp(timestamp) {
        this.timestamp = timestamp;
    }
    getDiscoveryBufferSize() {
        return this.discoveryBufferSize;
    }
    setDiscoveryBufferSize(discoveryBufferSize) {
        this.discoveryBufferSize = discoveryBufferSize;
    }
    getDiscoveryBufferSizePerApi() {
        return this.discoveryBufferSizePerApi;
    }
    setDiscoveryBufferSizePerApi(discoveryBufferSizePerApi) {
        this.discoveryBufferSizePerApi = discoveryBufferSizePerApi;
    }
}
AgentConfig.noOpAgentConfig = new AgentConfig({
    bufferSyncFreqInSec: 120,
    captureApiSample: false,
    configFetchFreqInSec: 120,
    registeredApiConfigs: [],
    timestamp: new Date(0),
    discoveryBufferSize: 0,
    discoveryBufferSizePerApi: 0,
    blackListRules: [],
});
exports.default = AgentConfig;
