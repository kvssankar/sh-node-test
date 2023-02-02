"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BufferManagerWorker_1 = __importDefault(require("./BufferManagerWorker"));
const Semaphore_1 = __importDefault(require("../common/utils/Semaphore"));
const SimpleBuffer_1 = __importDefault(require("./SimpleBuffer"));
const RequestExecutor_1 = require("../common/utils/RequestExecutor");
const SDKLogger_1 = __importDefault(require("../SDKLogger"));
class DiscoveredApiBufferManagerWorker extends BufferManagerWorker_1.default {
    constructor(config, ctUrl) {
        super(config, ctUrl);
        this.semaphore = new Semaphore_1.default(config.getDiscoveryBufferSize());
    }
    init() {
        return true;
    }
    offer(key, apiSample) {
        var _a;
        // @ts-ignore
        //TODO: handle null case gracefully
        this.bufferMap.computeIfAbsent(key, new SimpleBuffer_1.default((_a = this.getOperatingConfig()) === null || _a === void 0 ? void 0 : _a.getDiscoveryBufferSizePerApi()));
        let buffer = this.bufferMap.getBuffer(key);
        if (buffer) {
            return buffer.offer(apiSample);
        }
        else {
            return false;
        }
    }
    canOffer(key) {
        var _a, _b;
        if (this.semaphore.tryAcquire()) {
            let canOffer = false;
            if ((_a = this.getOperatingConfig()) === null || _a === void 0 ? void 0 : _a.getCaptureApiSample()) {
                let buffer = this.bufferMap.getBuffer(key);
                if (buffer) {
                    canOffer = buffer.canOffer();
                }
                else {
                    // @ts-ignore
                    canOffer = this.bufferMap.getBufferMap().size < ((_b = this.getOperatingConfig()) === null || _b === void 0 ? void 0 : _b.getDiscoveryBufferSize());
                }
            }
            this.semaphore.release();
            return canOffer;
        }
        return false;
    }
    syncForKey(key) {
        try {
            let buffer = this.bufferMap.getBuffer(key);
            if (!buffer) {
                return;
            }
            let iterations = buffer.getContentCount();
            if (iterations === 0) {
                this.bufferMap.delete(key);
                return;
            }
            let contents = [];
            for (let i = 0; i < iterations; i++) {
                let apiSample = buffer.poll();
                if (apiSample) {
                    contents.push(apiSample);
                }
                else {
                    this.bufferMap.delete(key);
                    break;
                }
            }
            if (contents.length === 0) {
                return;
            }
            (0, RequestExecutor_1.postRequest)(this.ctUrl + this.getUri(), contents)
                .then(() => {
                console.log("Successfully synced discovered api samples", contents);
            })
                .catch((err) => {
                SDKLogger_1.default.error("While sending discovered api samples" + err);
            });
        }
        catch (e) {
            SDKLogger_1.default.error("While sending discovered api samples" + e);
        }
    }
}
exports.default = DiscoveredApiBufferManagerWorker;
