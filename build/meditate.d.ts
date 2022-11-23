import { CreateCompletionRequest, OpenAIApi } from 'openai';
import { Logger } from 'winston';
export declare class Meditate {
    logger: Logger;
    prompt: string;
    commitMsg: string;
    openAI: OpenAIApi;
    request: CreateCompletionRequest;
    data: any;
    constructor();
    buildPrompt(): void;
    buildRequest(): void;
    writeStory(story: string): void;
    createCompletion(): Promise<void>;
}
