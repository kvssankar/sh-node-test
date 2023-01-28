export interface IURI {
    uriPath: string;
    hasPathVariable: boolean;
}
declare class URI {
    private uriPath;
    private hasPathVariable;
    constructor(data: IURI);
    getUriPath(): string;
    setUriPath(uriPath: string): void;
    isHasPathVariable(): boolean;
    setHasPathVariable(hasPathVariable: boolean): void;
    static getNonTemplatedURI(uriPath: string): URI;
    static getURI(uriPath: string): URI;
    equals(object: Object): boolean;
    getSize(): number;
    getPathSegments(): string[];
}
export default URI;
