"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestResponseContext {
    constructor(request, applicationName) {
        this.request = request;
        this.applicationName = applicationName;
        this.requestPayloadCaptureAttempted = false;
        this.responsePayloadCaptureAttempted = false;
        this.payloadCaptureAttempted = false;
        this.latency = 0;
    }
    getRequest() {
        return this.request;
    }
    getResponse() {
        return this.response;
    }
    setResponse(response) {
        this.response = response;
    }
    getApplicationName() {
        return this.applicationName;
    }
    getObservedApi() {
        return this.observedApi;
    }
    setObservedApi(observedApi) {
        this.observedApi = observedApi;
    }
    getApiConfig() {
        return this.apiConfig;
    }
    setApiConfig(apiConfig) {
        this.apiConfig = apiConfig;
    }
    getAgentConfig() {
        return this.agentConfig;
    }
    setAgentConfig(agentConfig) {
        this.agentConfig = agentConfig;
    }
    getApiBufferKey() {
        return this.apiBufferKey;
    }
    setApiBufferKey(apiBufferKey) {
        this.apiBufferKey = apiBufferKey;
    }
    isRequestPayloadCaptureAttempted() {
        return this.requestPayloadCaptureAttempted;
    }
    setRequestPayloadCaptureAttempted(requestPayloadCaptureAttempted) {
        this.requestPayloadCaptureAttempted = requestPayloadCaptureAttempted;
    }
    isResponsePayloadCaptureAttempted() {
        return this.responsePayloadCaptureAttempted;
    }
    setResponsePayloadCaptureAttempted(responsePayloadCaptureAttempted) {
        this.responsePayloadCaptureAttempted = responsePayloadCaptureAttempted;
    }
    isPayloadCaptureAttempted() {
        return this.payloadCaptureAttempted;
    }
    setPayloadCaptureAttempted(payloadCaptureAttempted) {
        this.payloadCaptureAttempted = payloadCaptureAttempted;
    }
    getLatency() {
        return this.latency;
    }
    setLatency(latency) {
        this.latency = latency;
    }
}
exports.default = RequestResponseContext;
