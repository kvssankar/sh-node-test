import SegmentTemplateDataType from "./SegmentTemplateDataType";
declare class PathSegment {
    private segmentName;
    private templatedSegment;
    private segmentTemplateDataType;
    constructor(segmentName: string, templatedSegment: boolean, segmentTemplateDataType: SegmentTemplateDataType);
    getSegmentName(): string;
    setSegmentName(segmentName: string): void;
    isTemplatedSegment(): boolean;
    setTemplatedSegment(templatedSegment: boolean): void;
    getSegmentTemplateDataType(): SegmentTemplateDataType;
    setSegmentTemplateDataType(segmentTemplateDataType: SegmentTemplateDataType): void;
    equals(object: Object): boolean;
}
export default PathSegment;
