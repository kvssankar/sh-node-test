"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class URIPathVariable {
    constructor(variableId, variableName) {
        this.variableId = variableId;
        this.variableName = variableName;
    }
    getVariableId() {
        return this.variableId;
    }
    setVariableId(variableId) {
        this.variableId = variableId;
    }
    getVariableName() {
        return this.variableName;
    }
    setVariableName(variableName) {
        this.variableName = variableName;
    }
}
exports.default = URIPathVariable;
