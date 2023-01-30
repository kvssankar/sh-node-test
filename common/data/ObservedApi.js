"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URI_1 = __importDefault(require("./uri/URI"));
const Validators_1 = require("../utils/Validators");
class ObservedApi {
    constructor(uri, method) {
        this.uri = URI_1.default.getNonTemplatedURI(uri);
        this.method = method;
    }
    getUri() {
        return this.uri;
    }
    getMethod() {
        return this.method;
    }
    setUri(uri) {
        this.uri = uri;
    }
    setMethod(method) {
        this.method = method;
    }
    matches(apiConfig) {
        if ((0, Validators_1.isNil)(apiConfig)) {
            return false;
        }
        if (this.method !== apiConfig.getMethod()) {
            return false;
        }
        return this.uri.equals(apiConfig.getUri());
    }
}
exports.default = ObservedApi;
