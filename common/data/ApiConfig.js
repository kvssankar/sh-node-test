"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URI_1 = __importDefault(require("./uri/URI"));
class ApiConfig {
    constructor(apiConfig) {
        this.uri = new URI_1.default(apiConfig.uri);
        this.bufferSize = apiConfig.bufferSize;
        this.method = apiConfig.method;
        this.captureSampleRequest = apiConfig.captureSampleRequest;
        this.captureSampleResponse = apiConfig.captureSampleResponse;
    }
    getUri() {
        return this.uri;
    }
    setUri(uri) {
        this.uri = uri;
    }
    getBufferSize() {
        return this.bufferSize;
    }
    setBufferSize(bufferSize) {
        this.bufferSize = bufferSize;
    }
    getMethod() {
        return this.method;
    }
    setMethod(method) {
        this.method = method;
    }
    getCaptureSampleRequest() {
        return this.captureSampleRequest;
    }
    setCaptureSampleRequest(captureSampleRequest) {
        this.captureSampleRequest = captureSampleRequest;
    }
    getCaptureSampleResponse() {
        return this.captureSampleResponse;
    }
    setCaptureSampleResponse(captureSampleResponse) {
        this.captureSampleResponse = captureSampleResponse;
    }
}
exports.default = ApiConfig;
