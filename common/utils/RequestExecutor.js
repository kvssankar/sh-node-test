"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRequest = exports.getRequest = void 0;
//import https
const https = __importStar(require("https"));
const http = __importStar(require("http"));
const getRequest = (url, headers) => {
    return new Promise((resolve, reject) => {
        if (url.startsWith("http://")) {
            http
                .get(url, { headers: headers }, (resp) => {
                let data = "";
                resp.on("data", (chunk) => {
                    data += chunk;
                });
                resp.on("end", () => {
                    resolve(data);
                });
            })
                .on("error", (err) => {
                reject(err);
            });
        }
        else {
            https
                .get(url, { headers: headers }, (resp) => {
                let data = "";
                resp.on("data", (chunk) => {
                    data += chunk;
                });
                resp.on("end", () => {
                    resolve(data);
                });
            })
                .on("error", (err) => {
                reject(err);
            });
        }
    });
};
exports.getRequest = getRequest;
const postRequest = (url, body) => {
    return new Promise((resolve, reject) => {
        let reqBody = JSON.stringify(body);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": reqBody.length,
            },
        };
        if (url.startsWith("http://")) {
            const req = http.request(url, options, (resp) => {
                let data = "";
                resp.on("data", (chunk) => {
                    data += chunk;
                });
                resp.on("end", () => {
                    resolve(data);
                });
            });
            req.on("error", (err) => {
                reject(err);
            });
            req.write(reqBody);
            req.end();
        }
        else {
            const req = https.request(url, options, (resp) => {
                let data = "";
                resp.on("data", (chunk) => {
                    data += chunk;
                });
                resp.on("end", () => {
                    resolve(data);
                });
            });
            req.on("error", (err) => {
                reject(err);
            });
            req.write(reqBody);
            req.end();
        }
    });
};
exports.postRequest = postRequest;
