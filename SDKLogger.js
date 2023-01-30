"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    log(message) {
        console.log(message);
    }
    error(message) {
        console.error(message);
    }
}
class SDKLogger {
    static setLogger(logger) {
        this.logger = logger;
    }
    static log(message) {
        //add timestamp and Info/Debug/Error
        let formattedMessage = new Date() + " -ShortloopSDK Info: " + message;
        if (this.logginEnabled)
            this.logger.log(formattedMessage);
    }
    static error(message) {
        let formattedMessage = new Date() + " -ShortloopSDK Error: " + message;
        this.logger.error(formattedMessage);
    }
}
SDKLogger.logger = new ConsoleLogger();
SDKLogger.logginEnabled = false;
exports.default = SDKLogger;
