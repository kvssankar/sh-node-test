declare enum SegmentTemplateDataType {
    NUMBER = "{number}",
    STRING = "{string}",
    UUID = "{uuid}",
    UNKNOWN = "{unknown}"
}
declare namespace SegmentTemplateDataType {
    function getTemplateDataTypeByDisplayName(displayName: string): SegmentTemplateDataType;
}
export default SegmentTemplateDataType;
