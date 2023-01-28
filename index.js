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
Object.defineProperty(exports, "__esModule", { value: true });
const ShortloopAutoConfiguration_1 = __importDefault(require("./ShortloopAutoConfiguration"));
const SDKLogger_1 = __importDefault(require("./SDKLogger"));
class ShortloopSDK {
    static init(options) {
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
            try {
                yield ((_a = this.shortloopAutoConfig
                    .getNodeFilter()) === null || _a === void 0 ? void 0 : _a.processReqAndRes(req, res, next));
            }
            catch (e) {
                SDKLogger_1.default.error("While capturing request and response: " + e);
                yield next();
            }
        });
    }
}
ShortloopSDK.isSuccess = false;
exports.default = ShortloopSDK;
