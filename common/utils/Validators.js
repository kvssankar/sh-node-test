"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNil = exports.isNotNil = void 0;
const isNotNil = (value) => {
    return value !== undefined && value !== null;
};
exports.isNotNil = isNotNil;
const isNil = (value) => {
    return !(0, exports.isNotNil)(value);
};
exports.isNil = isNil;
