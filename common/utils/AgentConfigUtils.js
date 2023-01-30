"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validators_1 = require("./Validators");
class AgentConfigUtils {
    static isConfigValid(config) {
        if ((0, Validators_1.isNil)(config)) {
            return false;
        }
        if ((0, Validators_1.isNil)(config.getBufferSyncFreqInSec())) {
            return false;
        }
        if ((0, Validators_1.isNil)(config.getConfigFetchFreqInSec())) {
            return false;
        }
        if ((0, Validators_1.isNil)(config.getCaptureApiSample())) {
            return false;
        }
        if ((0, Validators_1.isNil)(config.getDiscoveryBufferSize())) {
            return false;
        }
        if ((0, Validators_1.isNil)(config.getDiscoveryBufferSizePerApi())) {
            return false;
        }
        if (!(0, Validators_1.isNil)(config.getRegisteredApiConfigs())) {
            for (let apiConfig of config.getRegisteredApiConfigs()) {
                if (!this.isApiConfigValid(apiConfig)) {
                    return false;
                }
            }
        }
        if (!(0, Validators_1.isNil)(config.getBlackListRules())) {
            for (let blackListRule of config.getBlackListRules()) {
                if (this.isBlackListRuleValid(blackListRule)) {
                    return false;
                }
            }
        }
        return true;
    }
    static isBlackListRuleValid(blackListRule) {
        if ((0, Validators_1.isNil)(blackListRule)) {
            return false;
        }
        if (!blackListRule.isValid()) {
            return false;
        }
        return true;
    }
    static isApiConfigValid(apiConfig) {
        if ((0, Validators_1.isNil)(apiConfig)) {
            return false;
        }
        if (!this.isURIValid(apiConfig.getUri())) {
            return false;
        }
        if ((0, Validators_1.isNil)(apiConfig.getMethod())) {
            return false;
        }
        if ((0, Validators_1.isNil)(apiConfig.getBufferSize())) {
            return false;
        }
        if ((0, Validators_1.isNil)(apiConfig.getCaptureSampleRequest())) {
            return false;
        }
        if ((0, Validators_1.isNil)(apiConfig.getCaptureSampleResponse())) {
            return false;
        }
        return true;
    }
    static isURIValid(uri) {
        if ((0, Validators_1.isNil)(uri)) {
            return false;
        }
        if ((0, Validators_1.isNil)(uri.getUriPath())) {
            return false;
        }
        if (uri.getUriPath().length === 0) {
            return false;
        }
        return true;
    }
}
exports.default = AgentConfigUtils;
