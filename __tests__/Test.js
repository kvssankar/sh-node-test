"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleConfigManager_1 = __importDefault(require("../config/SimpleConfigManager"));
let configManager = new SimpleConfigManager_1.default("http://44.200.104.81", "DeathStar", "1");
configManager.init();
