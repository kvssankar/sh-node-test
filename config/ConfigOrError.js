"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigOrError {
    constructor(agentConfig, errorCode) {
        if (agentConfig)
            this.agentConfig = agentConfig;
        if (errorCode)
            this.errorCode = errorCode;
    }
}
exports.default = ConfigOrError;
