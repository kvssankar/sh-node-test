"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validators_1 = require("../utils/Validators");
const URI_1 = __importDefault(require("./uri/URI"));
class BlackListRule {
    constructor(data) {
        this.blackListType = data.blackListType;
        this.matchValues = data.matchValues;
        this.method = data.method;
    }
    isValid() {
        if ((0, Validators_1.isNil)(this.blackListType) ||
            (0, Validators_1.isNil)(this.matchValues) ||
            (0, Validators_1.isNil)(this.method)) {
            return false;
        }
        return true;
    }
    matchesUri(uri, method) {
        if (!this.isValid()) {
            return false;
        }
        if ((0, Validators_1.isNil)(uri) || (0, Validators_1.isNil)(method)) {
            return false;
        }
        if (this.method !== method) {
            return false;
        }
        if (this.blackListType.toLowerCase() === "startswith") {
            for (let matchValue of this.matchValues) {
                if (uri.getUriPath().toLowerCase().endsWith(matchValue.toLowerCase())) {
                    return true;
                }
            }
        }
        else if (this.blackListType.toLowerCase() === "absolute") {
            for (let matchValue of this.matchValues) {
                if (uri.equals(URI_1.default.getURI(matchValue))) {
                    return true;
                }
            }
        }
        return false;
    }
    //getters and setters
    getBlackListType() {
        return this.blackListType;
    }
    setBlackListType(blackListType) {
        this.blackListType = blackListType;
    }
    getMatchValues() {
        return this.matchValues;
    }
    setMatchValues(matchValues) {
        this.matchValues = matchValues;
    }
    getMethod() {
        return this.method;
    }
    setMethod(method) {
        this.method = method;
    }
}
exports.default = BlackListRule;
