"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEnv = void 0;
const dotenv_1 = require("dotenv");
const fetchEnv = () => {
    (0, dotenv_1.config)();
    const { env } = process;
    if (env.OPENAI_API_KEY == null) {
        throw new Error('Missing required env var: OPENAI_API_KEY');
    }
    return env.OPENAI_API_KEY;
};
exports.fetchEnv = fetchEnv;
