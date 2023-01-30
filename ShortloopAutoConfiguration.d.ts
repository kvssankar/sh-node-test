import ShortloopNodeFilter from "./filter/ShortloopNodeFilter";
declare class ShortloopAutoConfiguration {
    private readonly url;
    private readonly userApplicationName;
    private nodeFilter;
    constructor(url: string, userApplicationName: string);
    static isValidConfig(options: any): boolean;
    init(): boolean;
    getNodeFilter(): ShortloopNodeFilter | undefined;
}
export default ShortloopAutoConfiguration;
