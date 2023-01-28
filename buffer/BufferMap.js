"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BufferMap {
    constructor() {
        this.bufferMap = new Map();
    }
    getBufferMap() {
        return this.bufferMap;
    }
    setBufferMap(bufferMap) {
        this.bufferMap = bufferMap;
    }
    getBuffer(apiBufferKey) {
        for (let key of this.bufferMap.keys()) {
            if (key.equals(apiBufferKey)) {
                return this.bufferMap.get(key);
            }
        }
    }
    computeIfAbsent(apiBufferKey, buffer) {
        let simpleBuffer = this.getBuffer(apiBufferKey);
        if (simpleBuffer) {
            return simpleBuffer;
        }
        this.bufferMap.set(apiBufferKey, buffer);
        return buffer;
    }
    delete(apiBufferKey) {
        for (let key of this.bufferMap.keys()) {
            if (key.equals(apiBufferKey)) {
                return this.bufferMap.delete(key);
            }
        }
        return false;
    }
    clear() {
        this.bufferMap.clear();
    }
}
exports.default = BufferMap;
