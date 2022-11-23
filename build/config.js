"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    model: 'text-davinci-002',
    max_tokens: 2048,
    temperature: 1,
    top_p: 1,
    n: 1,
    stream: false,
    logprobs: null,
    echo: false,
    stop: null,
    presence_penalty: 0,
    frequency_penalty: 0,
    best_of: 1,
    logit_bias: {},
};
exports.default = config;
