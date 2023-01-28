"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiBufferKey {
    constructor(uri, method) {
        this.uri = uri;
        this.method = method;
    }
    static getApiBufferKeyFromObservedApi(observedApi) {
        return new ApiBufferKey(observedApi.getUri(), observedApi.getMethod());
    }
    static getApiBufferKeyFromApiConfig(apiConfig) {
        return new ApiBufferKey(apiConfig.getUri(), apiConfig.getMethod());
    }
    equals(object) {
        if (!object) {
            return false;
        }
        if (object instanceof ApiBufferKey) {
            let apiBufferKey = object;
            return (this.uri.equals(apiBufferKey.uri) && this.method === apiBufferKey.method);
        }
        return false;
    }
    //getters and setters
    getUri() {
        return this.uri;
    }
    setUri(uri) {
        this.uri = uri;
    }
    getMethod() {
        return this.method;
    }
    setMethod(method) {
        this.method = method;
    }
}
exports.default = ApiBufferKey;
