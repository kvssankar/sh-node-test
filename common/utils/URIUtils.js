"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validators_1 = require("./Validators");
class URIUtils {
    static getPathSegments(uri) {
        if (!uri)
            return [];
        return uri.split("/").filter((segment) => segment.length > 0);
    }
    static arePathSegmentsMatching(pathVariableA, pathVariableB) {
        if ((0, Validators_1.isNil)(pathVariableA) && (0, Validators_1.isNil)(pathVariableB))
            return true;
        if ((0, Validators_1.isNil)(pathVariableA) || (0, Validators_1.isNil)(pathVariableB))
            return false;
        if (pathVariableA === pathVariableB)
            return true;
        let isPathVariableATemplate = URIUtils.isPathSegmentTemplate(pathVariableA);
        let isPathVariableBTemplate = URIUtils.isPathSegmentTemplate(pathVariableB);
        return isPathVariableATemplate || isPathVariableBTemplate;
    }
    static isPathSegmentTemplate(pathSegment) {
        if ((0, Validators_1.isNil)(pathSegment))
            return false;
        pathSegment = pathSegment.trim();
        return pathSegment.startsWith("{") && pathSegment.endsWith("}");
    }
}
exports.default = URIUtils;
