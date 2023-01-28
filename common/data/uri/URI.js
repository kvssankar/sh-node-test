"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URIUtils_1 = __importDefault(require("../../utils/URIUtils"));
class URI {
    constructor(data) {
        this.uriPath = data.uriPath;
        this.hasPathVariable = data.hasPathVariable;
    }
    getUriPath() {
        return this.uriPath;
    }
    setUriPath(uriPath) {
        this.uriPath = uriPath;
    }
    isHasPathVariable() {
        return this.hasPathVariable;
    }
    setHasPathVariable(hasPathVariable) {
        this.hasPathVariable = hasPathVariable;
    }
    static getNonTemplatedURI(uriPath) {
        return new URI({
            uriPath: uriPath,
            hasPathVariable: false,
        });
    }
    static getURI(uriPath) {
        let pathSegments = URIUtils_1.default.getPathSegments(uriPath);
        let isTemplateURI = false;
        for (let pathSegment of pathSegments) {
            if (URIUtils_1.default.isPathSegmentTemplate(pathSegment)) {
                isTemplateURI = true;
                break;
            }
        }
        return new URI({
            uriPath: uriPath,
            hasPathVariable: isTemplateURI,
        });
    }
    equals(object) {
        if (object == this) {
            return true;
        }
        if (object == null) {
            return false;
        }
        if (!(object instanceof URI)) {
            return false;
        }
        let otherURI = object;
        if (!this.isHasPathVariable() && !otherURI.isHasPathVariable()) {
            return this.getUriPath() === otherURI.getUriPath();
        }
        let pathSegments = URIUtils_1.default.getPathSegments(this.getUriPath());
        let otherUTIPathSegments = URIUtils_1.default.getPathSegments(otherURI.getUriPath());
        if (pathSegments.length !== otherUTIPathSegments.length) {
            return false;
        }
        for (let idx = 0; idx < pathSegments.length; idx++) {
            let pathSegment = pathSegments[idx];
            let otherPathSegment = otherUTIPathSegments[idx];
            if (!URIUtils_1.default.arePathSegmentsMatching(pathSegment, otherPathSegment)) {
                return false;
            }
        }
        return true;
    }
    getSize() {
        return URIUtils_1.default.getPathSegments(this.getUriPath()).length;
    }
    getPathSegments() {
        return URIUtils_1.default.getPathSegments(this.getUriPath());
    }
}
exports.default = URI;
