interface Logger {
    log(message: string): void;
    error(message: string): void;
}
declare class SDKLogger {
    private static logger;
    static logginEnabled: boolean;
    static setLogger(logger: Logger): void;
    static log(message: string): void;
    static error(message: string): void;
}
export default SDKLogger;
