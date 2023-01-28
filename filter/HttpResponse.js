"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpResponse {
    constructor(headers, statusCode) {
        this.headers = headers;
        this.statusCode = statusCode;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    setHeaders(headers) {
        this.headers = headers;
    }
    setBody(body) {
        this.body = body;
    }
    getStatusCode() {
        return this.statusCode;
    }
    setStatusCode(statusCode) {
        this.statusCode = statusCode;
    }
}
exports.default = HttpResponse;
