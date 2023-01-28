"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APISample {
    constructor(apiSample) {
        this.rawUri = apiSample.rawUri;
        this.applicationName = apiSample.applicationName;
        this.hostName = apiSample.hostName;
        this.port = apiSample.port;
        this.scheme = apiSample.scheme;
        this.method = apiSample.method;
        this.parameters = apiSample.parameters;
        this.requestHeaders = apiSample.requestHeaders;
        this.responseHeaders = apiSample.responseHeaders;
        this.statusCode = apiSample.statusCode;
        this.requestPayload = apiSample.requestPayload;
        this.responsePayload = apiSample.responsePayload;
        this.uncaughtExceptionMessage = apiSample.uncaughtExceptionMessage;
        this.payloadCaptureAttempted = apiSample.payloadCaptureAttempted;
        this.requestPayloadCaptureAttempted =
            apiSample.requestPayloadCaptureAttempted;
        this.responsePayloadCaptureAttempted =
            apiSample.responsePayloadCaptureAttempted;
        this.latency = apiSample.latency;
    }
    getRawUri() {
        return this.rawUri;
    }
    setRawUri(rawUri) {
        this.rawUri = rawUri;
    }
    getApplicationName() {
        return this.applicationName;
    }
    setApplicationName(applicationName) {
        this.applicationName = applicationName;
    }
    getHostName() {
        return this.hostName;
    }
    setHostName(hostName) {
        this.hostName = hostName;
    }
    getPort() {
        return this.port;
    }
    setPort(port) {
        this.port = port;
    }
    getMethod() {
        return this.method;
    }
    setMethod(method) {
        this.method = method;
    }
    getParameters() {
        return this.parameters;
    }
    setParameters(parameters) {
        this.parameters = parameters;
    }
    getRequestHeaders() {
        return this.requestHeaders;
    }
    setRequestHeaders(requestHeaders) {
        this.requestHeaders = requestHeaders;
    }
    getResponseHeaders() {
        return this.responseHeaders;
    }
    setResponseHeaders(responseHeaders) {
        this.responseHeaders = responseHeaders;
    }
    getStatusCode() {
        return this.statusCode;
    }
    setStatusCode(statusCode) {
        this.statusCode = statusCode;
    }
    getRequestPayload() {
        return this.requestPayload;
    }
    setRequestPayload(requestPayload) {
        this.requestPayload = requestPayload;
    }
    getResponsePayload() {
        return this.responsePayload;
    }
    setResponsePayload(responsePayload) {
        this.responsePayload = responsePayload;
    }
    getUncaughtExceptionMessage() {
        return this.uncaughtExceptionMessage;
    }
    setUncaughtExceptionMessage(uncaughtExceptionMessage) {
        this.uncaughtExceptionMessage = uncaughtExceptionMessage;
    }
    getPayloadCaptureAttempted() {
        return this.payloadCaptureAttempted;
    }
    setPayloadCaptureAttempted(payloadCaptureAttempted) {
        this.payloadCaptureAttempted = payloadCaptureAttempted;
    }
    getRequestPayloadCaptureAttempted() {
        return this.requestPayloadCaptureAttempted;
    }
    setRequestPayloadCaptureAttempted(requestPayloadCaptureAttempted) {
        this.requestPayloadCaptureAttempted = requestPayloadCaptureAttempted;
    }
    getResponsePayloadCaptureAttempted() {
        return this.responsePayloadCaptureAttempted;
    }
    setResponsePayloadCaptureAttempted(responsePayloadCaptureAttempted) {
        this.responsePayloadCaptureAttempted = responsePayloadCaptureAttempted;
    }
    getLatency() {
        return this.latency;
    }
    setLatency(latency) {
        this.latency = latency;
    }
}
exports.default = APISample;
