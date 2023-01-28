"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class URIUtils {
    static getPathSegments(uri) {
        if (!uri)
            return [];
        return uri.split("/").filter((segment) => segment.length > 0);
    }
    static arePathSegmentsMatching(pathVariableA, pathVariableB) {
        if (!pathVariableA && !pathVariableB)
            return true;
        if (!pathVariableA || !pathVariableB)
            return false;
        if (pathVariableA === pathVariableB)
            return true;
        let isPathVariableATemplate = URIUtils.isPathSegmentTemplate(pathVariableA);
        let isPathVariableBTemplate = URIUtils.isPathSegmentTemplate(pathVariableB);
        return isPathVariableATemplate || isPathVariableBTemplate;
    }
    static isPathSegmentTemplate(pathSegment) {
        if (!pathSegment)
            return false;
        pathSegment = pathSegment.trim();
        return pathSegment.startsWith("{") && pathSegment.endsWith("}");
    }
}
exports.default = URIUtils;
