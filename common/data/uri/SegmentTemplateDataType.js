"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SegmentTemplateDataType;
(function (SegmentTemplateDataType) {
    SegmentTemplateDataType["NUMBER"] = "{number}";
    SegmentTemplateDataType["STRING"] = "{string}";
    SegmentTemplateDataType["UUID"] = "{uuid}";
    SegmentTemplateDataType["UNKNOWN"] = "{unknown}";
})(SegmentTemplateDataType || (SegmentTemplateDataType = {}));
(function (SegmentTemplateDataType) {
    function getTemplateDataTypeByDisplayName(displayName) {
        switch (displayName) {
            case "{number}":
                return SegmentTemplateDataType.NUMBER;
            case "{string}":
                return SegmentTemplateDataType.STRING;
            case "{uuid}":
                return SegmentTemplateDataType.UUID;
            default:
                return SegmentTemplateDataType.UNKNOWN;
        }
    }
    SegmentTemplateDataType.getTemplateDataTypeByDisplayName = getTemplateDataTypeByDisplayName;
})(SegmentTemplateDataType || (SegmentTemplateDataType = {}));
exports.default = SegmentTemplateDataType;
