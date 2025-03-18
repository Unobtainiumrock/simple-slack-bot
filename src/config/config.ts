import dotenv from 'dotenv';

dotenv.config();

interface Config {
  slack: {
    token: string;
    channelId: string;
  };
  scheduler: {
    timezone: string;
  };
}

// Validate required environment variables
const requiredEnvVars = ['SLACK_TOKEN', 'SLACK_CHANNEL_ID'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}

export const appConfig: Config = {
  slack: {
    token: process.env.SLACK_TOKEN!,
    channelId: process.env.SLACK_CHANNEL_ID!
  },
  scheduler: {
    timezone: process.env.TIMEZONE || 'UTC'
  }
}; 