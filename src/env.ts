import { config } from 'dotenv';

export const fetchEnv = (): string => {
  config();
  const { env } = process;

  if (env.OPENAI_API_KEY == null) {
    throw new Error('Missing required env var: OPENAI_API_KEY');
  }

  return env.OPENAI_API_KEY;
};
