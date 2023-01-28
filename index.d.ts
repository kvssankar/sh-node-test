declare class ShortloopSDK {
    private static shortloopAutoConfig;
    private static isSuccess;
    static init(options: {
        url: string;
        userApplicationName: string;
    }): void;
    static capture(): Function;
}
export default ShortloopSDK;
