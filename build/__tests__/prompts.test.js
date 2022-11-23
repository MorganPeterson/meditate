"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const prompts_1 = require("../prompts");
(0, ava_1.default)('prompts.ts: randomPrompt', (t) => {
    const msgs = (0, prompts_1.randomPrompt)();
    t.true(msgs.length === 2);
});
