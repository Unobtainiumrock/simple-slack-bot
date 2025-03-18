import { slackClient } from './client';
import { appConfig } from '../config/config';

// Types for message options
interface MessageOptions {
  blocks?: any[];
  text: string;
  channelId?: string;
}

/**
 * Send a message to a Slack channel
 */
export const sendMessage = async (options: MessageOptions): Promise<boolean> => {
  const channelId = options.channelId || appConfig.slack.channelId;
  
  try {
    const result = await slackClient.chat.postMessage({
      channel: channelId,
      text: options.text,
      blocks: options.blocks,
      unfurl_links: false
    });
    
    if (result.ok) {
      console.log(`Message sent to channel ${channelId}`);
      return true;
    }
    
    console.error('Failed to send message:', result);
    return false;
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    return false;
  }
};

/**
 * Send the weekly reminder message
 */
export const sendWeeklyReminder = async (): Promise<boolean> => {
  // const reminderText = 'Reminder: Please fill out your end-of-week emails!';
  const reminderText = 'BUN BUN!!';
  
  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '📝 Weekly Reminder',
        emoji: true
      }
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Hello team! This is your friendly reminder to complete and send your end-of-week emails.'
      }
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Please make sure to include your accomplishments, challenges, and plans for next week.'
      }
    },
    {
      type: 'divider'
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: 'This is an automated reminder sent every Thursday at 7 PM.'
        }
      ]
    }
  ];

  return sendMessage({ text: reminderText, blocks });
}; 