// adapted from https://github.com/austenstone/openai-completion-action/blob/4ceec96fe77a0734567849606910f7d7b5723642/src/context.ts
import { join } from 'path';
import { Configuration, CreateCompletionRequest, OpenAIApi } from 'openai';
import { writeFile, mkdirSync } from 'fs';
import {
  Logger, createLogger, transports, format,
} from 'winston';

import { randomPrompt } from './prompts';
import { fetchEnv } from './env';
import config from './config';

// eslint-disable-next-line import/prefer-default-export
export class Meditate {
  logger: Logger;

  prompt: string;

  commitMsg: string;

  openAI: OpenAIApi;

  request: CreateCompletionRequest;

  data: any;

  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.simple(),
      defaultMeta: { service: 'meditate' },
      transports: [
        new transports.Console(),
      ],
    });
    const OPENAI_API_KEY = fetchEnv();
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });

    this.openAI = new OpenAIApi(configuration);
    this.prompt = '';
    this.commitMsg = '';
    this.request = {} as CreateCompletionRequest;
  }

  buildPrompt() {
    const [prompt, commitMsg] = randomPrompt();
    this.prompt = prompt;
    this.commitMsg = commitMsg;
  }

  buildRequest() {
    this.request = { ...config, prompt: this.prompt };
    if (!this.request.prompt) {
      this.logger.error('No prompt provided');
    }
  }

  writeStory(story: string) {
      const datePrefix = ((new Date()).toISOString()).slice(0, 10);
      const dirName = join(__dirname, 'stories');
      const fileName = join(dirName, `${datePrefix} - ${this.commitMsg}.md`);

      try {
        mkdirSync(dirName, { recursive: true });
      } catch (err) {
        this.logger.error(err);
        return;
      }

      writeFile(fileName, story, (err) => this.logger.error(err));
  }

  async createCompletion() {
    this.data = await this.openAI.createCompletion(this.request)
  }
}
