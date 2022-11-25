import { join } from 'path';
import {
  Configuration, CreateCompletionRequest, CreateCompletionResponse, OpenAIApi,
} from 'openai';
import { writeFile, mkdirSync } from 'fs';
import {
  Logger, createLogger, transports, format,
} from 'winston';

import { randomPrompt, makeCommitMsg } from './prompts';
import { fetchEnv } from './env';
import { config } from './config';

export class Meditate {
  logger: Logger;

  prompt: string;

  commitMsg: string;

  openAI: OpenAIApi;

  request: CreateCompletionRequest;

  data: CreateCompletionResponse | undefined;

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

  private buildRequest() {
    this.request = { ...config, prompt: this.prompt };
    if (!this.request.prompt) {
      this.logger.error('No prompt provided');
    }
  }

  writeStory() {
    const story = this.data?.choices?.[0]?.text;

    if (!story) return;

    const storyToWrite = `${this.commitMsg}\n\n${this.prompt}${story}`;

    const datePrefix = ((new Date()).toISOString()).slice(0, 10);
    const dirName = join(process.cwd(), 'stories');
    const fileName = join(dirName, `${datePrefix} - ${this.commitMsg}.txt`);

    try {
      mkdirSync(dirName, { recursive: true });
    } catch (err) {
      this.logger.error(err);
      return;
    }

    writeFile(fileName, storyToWrite, (err) => this.logger.error(err));
  }

  async create(prompt: string): Promise<string | undefined> {
    this.prompt = prompt;
    this.commitMsg = makeCommitMsg(prompt);

    const result = await this.createCompletion();

    return result;
  }

  async createRandom(): Promise<string | undefined> {
    const [prompt, commitMsg] = randomPrompt();
    this.prompt = prompt;
    this.commitMsg = commitMsg;
    const result = await this.createCompletion();
    return result;
  }

  async createCompletion(): Promise<string | undefined> {
    this.buildRequest();
    const response = await this.openAI.createCompletion(this.request);

    if (response.status === 200) {
      this.logger.info(`${response.status} - ${response.statusText}`);
    } else {
      this.logger.error(`${response.status} - ${response.statusText}`);
    }

    this.data = response.data;
    return response.data?.choices?.[0]?.text;
  }
}
