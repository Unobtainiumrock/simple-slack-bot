"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWeeklyReminder = exports.sendMessage = void 0;
const client_1 = require("./client");
const config_1 = require("../config/config");
/**
 * Send a message to a Slack channel
 */
const sendMessage = async (options) => {
    const channelId = options.channelId || config_1.appConfig.slack.channelId;
    try {
        const result = await client_1.slackClient.chat.postMessage({
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
    }
    catch (error) {
        console.error('Error sending message to Slack:', error);
        return false;
    }
};
exports.sendMessage = sendMessage;
/**
 * Send the weekly reminder message
 */
const sendWeeklyReminder = async () => {
    const reminderText = 'Reminder: Please fill out your end-of-week emails!';
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
    return (0, exports.sendMessage)({ text: reminderText, blocks });
};
exports.sendWeeklyReminder = sendWeeklyReminder;
