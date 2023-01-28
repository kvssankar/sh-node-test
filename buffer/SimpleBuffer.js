"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleBuffer {
    constructor(capacity) {
        this.size = capacity;
        this.arrayBlockingQueue = [];
    }
    offer(apiSample) {
        if (this.canOffer()) {
            this.arrayBlockingQueue.push(apiSample);
            return true;
        }
        return false;
    }
    canOffer() {
        return this.size > 0 && this.arrayBlockingQueue.length < this.size;
    }
    poll() {
        if (this.arrayBlockingQueue.length > 0) {
            return this.arrayBlockingQueue.shift();
        }
        return undefined;
    }
    getContentCount() {
        return this.arrayBlockingQueue.length;
    }
    clear() {
        this.arrayBlockingQueue = [];
        return true;
    }
}
exports.default = SimpleBuffer;
