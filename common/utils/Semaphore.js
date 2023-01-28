"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Semaphore {
    constructor(count) {
        this._count = count;
        this._queue = [];
    }
    tryAcquire() {
        if (this._count > 0) {
            this._count--;
            return true;
        }
        return false;
    }
    acquire() {
        return new Promise((resolve, reject) => {
            if (this._count > 0) {
                this._count--;
                resolve();
            }
            else {
                this._queue.push(resolve);
            }
        });
    }
    release() {
        if (this._queue.length > 0) {
            // @ts-ignore
            this._queue.shift()();
        }
        else {
            this._count++;
        }
    }
}
exports.default = Semaphore;
