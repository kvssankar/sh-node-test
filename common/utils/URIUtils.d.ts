declare class URIUtils {
    static getPathSegments(uri: string): string[];
    static arePathSegmentsMatching(pathVariableA: string, pathVariableB: string): boolean;
    static isPathSegmentTemplate(pathSegment: string): boolean;
}
export default URIUtils;
