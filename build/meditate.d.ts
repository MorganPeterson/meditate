import { CreateCompletionRequest, OpenAIApi } from 'openai';
import { Logger } from 'winston';
export declare class Meditate {
    logger: Logger;
    prompt: string;
    commitMsg: string;
    openAI: OpenAIApi;
    payload: CreateCompletionRequest;
    constructor();
    createPayload(): void;
    createCompletion(): Promise<void>;
}
