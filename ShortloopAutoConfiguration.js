"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleConfigManager_1 = __importDefault(require("./config/SimpleConfigManager"));
const RegisteredApiBufferManager_1 = __importDefault(require("./buffer/RegisteredApiBufferManager"));
const DiscoveredApiBufferManager_1 = __importDefault(require("./buffer/DiscoveredApiBufferManager"));
const ApiProcessor_1 = __importDefault(require("./filter/ApiProcessor"));
const ShortloopNodeFilter_1 = __importDefault(require("./filter/ShortloopNodeFilter"));
const SDKVersion_1 = __importDefault(require("./SDKVersion"));
class ShortloopAutoConfiguration {
    constructor(url, userApplicationName) {
        this.url = url === null || url === void 0 ? void 0 : url.trim();
        this.userApplicationName = userApplicationName === null || userApplicationName === void 0 ? void 0 : userApplicationName.trim();
    }
    init() {
        if (!this.url) {
            let message = "Mandatory Config `shortloop.url` is missing";
            console.log(message);
            return false;
        }
        if (!this.userApplicationName) {
            let message = "Mandatory Config `shortloop.userApplicationName` is missing";
            console.log(message);
            return false;
        }
        //   let randomId:number = Math.floor(Math.random() * 1000000000);
        let randomId = 1;
        let agentId = randomId.toString();
        let configManager = new SimpleConfigManager_1.default(this.url, this.userApplicationName, agentId);
        configManager.init();
        let registeredBufferManager = new RegisteredApiBufferManager_1.default(configManager, this.url);
        registeredBufferManager.init();
        let discoveredBufferManager = new DiscoveredApiBufferManager_1.default(configManager, this.url);
        discoveredBufferManager.init();
        let shortloopApiProcessor = new ApiProcessor_1.default(registeredBufferManager, discoveredBufferManager);
        let shortloopNodeFilter = new ShortloopNodeFilter_1.default(configManager, shortloopApiProcessor, this.userApplicationName);
        shortloopNodeFilter.init();
        this.nodeFilter = shortloopNodeFilter;
        let message = `Shortloop Node Filter initialized with \nurl:: ${this.url} \n userApplicationName:: ${this.userApplicationName} \n SDK Version:: ${SDKVersion_1.default.MAJOR_VERSION}.${SDKVersion_1.default.MINOR_VERSION}.${SDKVersion_1.default.MINOR_VERSION}`;
        console.log(message);
        return true;
    }
    getNodeFilter() {
        return this.nodeFilter;
    }
}
exports.default = ShortloopAutoConfiguration;
