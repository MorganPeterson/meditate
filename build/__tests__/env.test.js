"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const env_1 = require("../env");
(0, ava_1.default)('Reads .env', (t) => {
    t.notThrows(() => (0, env_1.fetchEnv)());
});
