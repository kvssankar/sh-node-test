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
const APISample_1 = __importDefault(require("../common/data/APISample"));
const HttpResponse_1 = __importDefault(require("./HttpResponse"));
const SDKLogger_1 = __importDefault(require("../SDKLogger"));
class ApiProcessor {
    constructor(registeredApiBufferManager, discoveredApiBufferManager) {
        this.registeredApiBufferManager = registeredApiBufferManager;
        this.discoveredApiBufferManager = discoveredApiBufferManager;
    }
    processDiscoveredApi(context, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let worker = this.discoveredApiBufferManager.getWorker();
            if (!worker) {
                yield next();
                return;
            }
            let canOffer = worker.canOffer(context.getApiBufferKey());
            console.log("discover process canOffer", canOffer);
            context.setPayloadCaptureAttempted(false);
            const _end = res.end;
            res.end = function (chunk) {
                context.setResponse(new HttpResponse_1.default(res.getHeaders(), res.statusCode));
                _end.apply(res, arguments);
            };
            yield next();
            if (canOffer) {
                this.tryOffering(context, worker);
            }
        });
    }
    processRegisteredApi(context, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let worker = this.registeredApiBufferManager.getWorker();
            if (!worker) {
                yield next();
                return;
            }
            context.setPayloadCaptureAttempted(true);
            let canOffer = worker.canOffer(context.getApiBufferKey());
            console.log("registered process canOffer", canOffer);
            let requestPayloadCaptureAttempted = false;
            let responsePayloadCaptureAttempted = false;
            if (canOffer) {
                requestPayloadCaptureAttempted = this.shouldCaptureRequest(context);
                if (requestPayloadCaptureAttempted) {
                    try {
                        if (typeof req.body === "object") {
                            context.getRequest().setBody(JSON.stringify(req.body));
                        }
                        else {
                            context.getRequest().setBody(req.body);
                        }
                    }
                    catch (err) {
                        SDKLogger_1.default.error("reading request body" + err);
                    }
                }
                responsePayloadCaptureAttempted = this.shouldCaptureResponse(context);
                const _end = res.end;
                const _write = res.write;
                const chunks = [];
                res.write = function (chunk) {
                    if (responsePayloadCaptureAttempted) {
                        if (chunk)
                            chunks.push(chunk);
                    }
                    _write.apply(res, arguments);
                };
                res.end = function (chunk) {
                    var _a;
                    try {
                        if (responsePayloadCaptureAttempted) {
                            if (chunk)
                                chunks.push(chunk);
                        }
                        context.setResponse(new HttpResponse_1.default(res.getHeaders(), res.statusCode));
                        if (responsePayloadCaptureAttempted) {
                            const body = Buffer.concat(chunks).toString("utf8");
                            (_a = context.getResponse()) === null || _a === void 0 ? void 0 : _a.setBody(body);
                        }
                    }
                    catch (err) {
                        SDKLogger_1.default.error("reading response body of captured api" + err);
                    }
                    _end.apply(res, arguments);
                };
                context.setRequestPayloadCaptureAttempted(requestPayloadCaptureAttempted);
                context.setResponsePayloadCaptureAttempted(responsePayloadCaptureAttempted);
            }
            let startTime = 0;
            let shouldComputeLatency = canOffer;
            if (shouldComputeLatency) {
                startTime = Date.now();
            }
            yield next();
            if (shouldComputeLatency) {
                context.setLatency(Date.now() - startTime);
            }
            if (canOffer) {
                this.tryOffering(context, worker);
            }
        });
    }
    tryOffering(context, worker) {
        try {
            let apiSample = this.getBufferEntryForApiSample(context);
            worker.offer(context.getApiBufferKey(), apiSample);
        }
        catch (e) {
            SDKLogger_1.default.error("while offering api sample to buffer" + e);
        }
    }
    shouldCaptureRequest(context) {
        return (context &&
            context.getApiConfig() &&
            context.getApiConfig().getCaptureSampleRequest());
    }
    shouldCaptureResponse(context) {
        return (context &&
            context.getApiConfig() &&
            context.getApiConfig().getCaptureSampleResponse());
    }
    getBufferEntryForApiSample(context) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        let apiSample = new APISample_1.default({
            rawUri: (_a = context.getRequest()) === null || _a === void 0 ? void 0 : _a.getRawUri(),
            method: (_b = context.getRequest()) === null || _b === void 0 ? void 0 : _b.getMethod(),
            applicationName: context.getApplicationName(),
            hostName: (_c = context.getRequest()) === null || _c === void 0 ? void 0 : _c.getHostName(),
            port: (_d = context.getRequest()) === null || _d === void 0 ? void 0 : _d.getPort(),
            scheme: (_e = context.getRequest()) === null || _e === void 0 ? void 0 : _e.getScheme(),
            parameters: (_f = context.getRequest()) === null || _f === void 0 ? void 0 : _f.getParams(),
            requestHeaders: (_g = context.getRequest()) === null || _g === void 0 ? void 0 : _g.getHeaders(),
            responseHeaders: (_h = context.getResponse()) === null || _h === void 0 ? void 0 : _h.getHeaders(),
            statusCode: (_j = context.getResponse()) === null || _j === void 0 ? void 0 : _j.getStatusCode(),
            requestPayload: (_k = context.getRequest()) === null || _k === void 0 ? void 0 : _k.getBody(),
            responsePayload: (_l = context.getResponse()) === null || _l === void 0 ? void 0 : _l.getBody(),
            uncaughtExceptionMessage: null,
            payloadCaptureAttempted: context.isPayloadCaptureAttempted(),
            requestPayloadCaptureAttempted: context.isRequestPayloadCaptureAttempted(),
            responsePayloadCaptureAttempted: context.isResponsePayloadCaptureAttempted(),
            latency: context.getLatency(),
        });
        if (context.getApiConfig()) {
            apiSample.setMethod(context.getApiConfig().getMethod());
        }
        else {
            apiSample.setMethod(context.getObservedApi().getMethod());
        }
        return apiSample;
    }
}
exports.default = ApiProcessor;
