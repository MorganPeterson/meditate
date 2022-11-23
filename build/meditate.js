"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditate = void 0;
// adapted from https://github.com/austenstone/openai-completion-action/blob/4ceec96fe77a0734567849606910f7d7b5723642/src/context.ts
const path_1 = require("path");
const openai_1 = require("openai");
const fs_1 = require("fs");
const winston_1 = require("winston");
const prompts_1 = require("./prompts");
const env_1 = require("./env");
const config_1 = require("./config");
// eslint-disable-next-line import/prefer-default-export
class Meditate {
    constructor() {
        this.logger = (0, winston_1.createLogger)({
            level: 'info',
            format: winston_1.format.simple(),
            defaultMeta: { service: 'meditate' },
            transports: [
                new winston_1.transports.Console(),
            ],
        });
        const OPENAI_API_KEY = (0, env_1.fetchEnv)();
        const configuration = new openai_1.Configuration({
            apiKey: OPENAI_API_KEY,
        });
        this.openAI = new openai_1.OpenAIApi(configuration);
        this.prompt = '';
        this.commitMsg = '';
        this.request = {};
    }
    buildPrompt() {
        this.logger.info('Building random prompt');
        const [prompt, commitMsg] = (0, prompts_1.randomPrompt)();
        this.prompt = prompt;
        this.commitMsg = commitMsg;
    }
    buildRequest() {
        this.logger.info('Building completion request');
        this.request = Object.assign(Object.assign({}, config_1.config), { prompt: this.prompt });
        if (!this.request.prompt) {
            this.logger.error('No prompt provided');
        }
    }
    writeStory(story) {
        const datePrefix = ((new Date()).toISOString()).slice(0, 10);
        const dirName = (0, path_1.join)(__dirname, 'stories');
        const fileName = (0, path_1.join)(dirName, `${datePrefix} - ${this.commitMsg}.md`);
        try {
            (0, fs_1.mkdirSync)(dirName, { recursive: true });
        }
        catch (err) {
            this.logger.error(err);
            return;
        }
        (0, fs_1.writeFile)(fileName, story, (err) => this.logger.error(err));
    }
    createCompletion() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.openAI.createCompletion(this.request);
            if (response.status === 200) {
                this.logger.info(`${response.status} - ${response.statusText}`);
                this.data = response.data;
            }
            else {
                this.logger.error(`${response.status} - ${response.statusText}`);
                this.data = response.data;
            }
        });
    }
}
exports.Meditate = Meditate;
