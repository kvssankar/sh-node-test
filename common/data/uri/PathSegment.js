"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PathSegment {
    constructor(segmentName, templatedSegment, segmentTemplateDataType) {
        this.segmentName = segmentName;
        this.templatedSegment = templatedSegment;
        this.segmentTemplateDataType = segmentTemplateDataType;
    }
    getSegmentName() {
        return this.segmentName;
    }
    setSegmentName(segmentName) {
        this.segmentName = segmentName;
    }
    isTemplatedSegment() {
        return this.templatedSegment;
    }
    setTemplatedSegment(templatedSegment) {
        this.templatedSegment = templatedSegment;
    }
    getSegmentTemplateDataType() {
        return this.segmentTemplateDataType;
    }
    setSegmentTemplateDataType(segmentTemplateDataType) {
        this.segmentTemplateDataType = segmentTemplateDataType;
    }
    equals(object) {
        if (this == object) {
            return true;
        }
        if (object == null) {
            return false;
        }
        if (!(object instanceof PathSegment)) {
            return false;
        }
        let otherSegment = object;
        if (this.isTemplatedSegment() && otherSegment.isTemplatedSegment()) {
            return (this.getSegmentTemplateDataType() ===
                otherSegment.getSegmentTemplateDataType());
        }
        if (this.isTemplatedSegment() || otherSegment.isTemplatedSegment()) {
            return false;
        }
        return this.segmentName === otherSegment.getSegmentName();
    }
}
exports.default = PathSegment;
