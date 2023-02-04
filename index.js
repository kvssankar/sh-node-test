"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ShortloopAutoConfiguration_1 = __importDefault(require("./ShortloopAutoConfiguration"));
const SDKLogger_1 = __importDefault(require("./SDKLogger"));
class ShortloopSDK {
    static init(options) {
        if (!ShortloopAutoConfiguration_1.default.isValidConfig(options)) {
            return;
        }
        if (options.loggingEnabled) {
            SDKLogger_1.default.logginEnabled = options.loggingEnabled;
        }
        this.shortloopAutoConfig = new ShortloopAutoConfiguration_1.default(options.url, options.userApplicationName);
        this.isSuccess = this.shortloopAutoConfig.init();
    }
    static capture() {
        return (req, res, next) => {
            var _a;
            if (!this.isSuccess) {
                next();
                return;
            }
            (_a = this.shortloopAutoConfig
                .getNodeFilter()) === null || _a === void 0 ? void 0 : _a.processReqAndRes(req, res, next);
        };
    }
}
ShortloopSDK.isSuccess = false;
module.exports = ShortloopSDK;
