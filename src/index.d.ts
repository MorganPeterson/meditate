export declare type CreateCompletionENVT = {
  MODEL: string;
  OPENAI_API_KEY: string;
  MAX_TOKENS?: number;
  TEMPERATURE?: number;
  TOP_P?: number;
  N?: number;
  STREAM?: boolean;
  LOGPROBS?: number | null;
  ECHO?: boolean;
  STOP?: string | string[];
  PRESENCE_PENALTY?: number;
  FREQUENCY_PENALTY?: number;
  BEST_OF?: number;
}
