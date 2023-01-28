"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpRequest {
    constructor(rawUri, hostname, port, scheme, method, headers, params, body) {
        this.rawUri = rawUri;
        this.hostname = hostname;
        this.port = port;
        this.scheme = scheme;
        this.url = scheme + "://" + hostname + ":" + port + rawUri;
        this.method = method;
        this.headers = headers;
        this.params = params;
        this.body = body ? JSON.stringify(body) : null;
    }
    getUrl() {
        return this.url;
    }
    getRawUri() {
        return this.rawUri;
    }
    setRawUri(rawUri) {
        this.rawUri = rawUri;
    }
    getHostName() {
        return this.hostname;
    }
    setHostName(hostname) {
        this.hostname = hostname;
    }
    getPort() {
        return this.port;
    }
    setPort(port) {
        this.port = port;
    }
    setScheme(scheme) {
        this.scheme = scheme;
    }
    getScheme() {
        return this.scheme;
    }
    getMethod() {
        return this.method;
    }
    getHeaders() {
        return this.headers;
    }
    getParams() {
        return this.params;
    }
    setParams(params) {
        this.params = params;
    }
    getBody() {
        return this.body;
    }
    setUrl(url) {
        this.url = url;
    }
    setMethod(method) {
        this.method = method;
    }
    setHeaders(headers) {
        this.headers = headers;
    }
    setBody(body) {
        this.body = body;
    }
}
exports.default = HttpRequest;
