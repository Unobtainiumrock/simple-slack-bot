import { WebClient } from '@slack/web-api';
import { appConfig } from '../config/config';

// Create a Slack WebClient instance
export const slackClient = new WebClient(appConfig.slack.token);

// Test the connection to Slack
export const testConnection = async (): Promise<boolean> => {
  try {
    const result = await slackClient.auth.test();
    
    if (result.ok) {
      console.log(`Connected to Slack as ${result.user} in team ${result.team}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error connecting to Slack:', error);
    return false;
  }
}; 