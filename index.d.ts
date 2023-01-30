interface IOptions {
    url: string;
    userApplicationName: string;
    loggingEnabled?: boolean;
}
declare class ShortloopSDK {
    private static shortloopAutoConfig;
    private static isSuccess;
    static init(options: IOptions): void;
    static capture(): Function;
}
export = ShortloopSDK;
