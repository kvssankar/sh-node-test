"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this.isSuccess) {
                next();
                return;
            }
            yield ((_a = this.shortloopAutoConfig
                .getNodeFilter()) === null || _a === void 0 ? void 0 : _a.processReqAndRes(req, res, next));
        });
    }
}
ShortloopSDK.isSuccess = false;
module.exports = ShortloopSDK;
