"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AgentConfigUtils {
    static isRawConfigValid(data) {
        if (!data)
            return false;
        if (data.bufferSyncFreqInSec === null ||
            data.bufferSyncFreqInSec === undefined)
            return false;
        if (data.configFetchFreqInSec === null ||
            data.configFetchFreqInSec === undefined)
            return false;
        if (data.captureApiSample === null)
            return false;
        if (data.timestamp === null || data.timestamp === undefined)
            return false;
        if (data.discoveryBufferSize === null ||
            data.discoveryBufferSize === undefined)
            return false;
        if (data.discoveryBufferSizePerApi === null ||
            data.discoveryBufferSizePerApi === undefined)
            return false;
        if (data.registeredApiConfigs) {
            for (let apiConfig of data.registeredApiConfigs) {
                if (apiConfig.uri === null || apiConfig.uri === undefined)
                    return false;
                if (apiConfig.uri.uriPath === null ||
                    apiConfig.uri.uriPath === undefined)
                    return false;
                if (apiConfig.uri.hasPathVariable === null ||
                    apiConfig.uri.hasPathVariable === undefined)
                    return false;
                if (apiConfig.method === null || apiConfig.method === undefined)
                    return false;
                if (apiConfig.bufferSize === null || apiConfig.bufferSize === undefined)
                    return false;
                if (apiConfig.captureSampleRequest === null ||
                    apiConfig.captureSampleRequest === undefined)
                    return false;
                if (apiConfig.captureSampleResponse === null ||
                    apiConfig.captureSampleResponse === undefined)
                    return false;
            }
        }
        return true;
    }
    static isConfigValid(config) {
        if (!config) {
            return false;
        }
        if (config.getBufferSyncFreqInSec() === undefined ||
            config.getBufferSyncFreqInSec() === null) {
            return false;
        }
        if (config.getConfigFetchFreqInSec() === undefined ||
            config.getConfigFetchFreqInSec() === null) {
            return false;
        }
        if (config.getCaptureApiSample() === undefined ||
            config.getCaptureApiSample() === null) {
            return false;
        }
        if (config.getDiscoveryBufferSize() === undefined ||
            config.getDiscoveryBufferSize() === null) {
            return false;
        }
        if (config.getDiscoveryBufferSizePerApi() === undefined ||
            config.getDiscoveryBufferSizePerApi() === null) {
            return false;
        }
        if (config.getRegisteredApiConfigs()) {
            for (let apiConfig of config.getRegisteredApiConfigs()) {
                if (!this.isApiConfigValid(apiConfig)) {
                    return false;
                }
            }
        }
        if (config.getBlackListRules()) {
            for (let blackListRule of config.getBlackListRules()) {
                if (this.isBlackListRuleValid(blackListRule)) {
                    return false;
                }
            }
        }
        return true;
    }
    static isBlackListRuleValid(blackListRule) {
        if (!blackListRule) {
            return false;
        }
        if (!blackListRule.isValid()) {
            return false;
        }
        return true;
    }
    static isApiConfigValid(apiConfig) {
        if (!apiConfig) {
            return false;
        }
        if (!this.isURIValid(apiConfig.getUri())) {
            return false;
        }
        if (apiConfig.getMethod() === null || apiConfig.getMethod() === undefined) {
            return false;
        }
        if (apiConfig.getBufferSize() === null ||
            apiConfig.getBufferSize() === undefined) {
            return false;
        }
        if (apiConfig.getCaptureSampleRequest() === null ||
            apiConfig.getCaptureSampleRequest() === undefined) {
            return false;
        }
        return !(apiConfig.getCaptureSampleResponse() === null ||
            apiConfig.getCaptureSampleResponse() === undefined);
    }
    static isURIValid(uri) {
        if (!uri) {
            return false;
        }
        return !(!uri.getUriPath() || uri.getUriPath().length === 0);
    }
}
exports.default = AgentConfigUtils;
