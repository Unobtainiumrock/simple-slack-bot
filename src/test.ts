import { testConnection } from './slack/client';
import { sendWeeklyReminder } from './slack/messages';

/**
 * Test script to verify Slack connection and messaging
 */
const runTest = async (): Promise<void> => {
  try {
    // 1. Test Slack connection
    console.log('Testing connection to Slack...');
    const connectionSuccess = await testConnection();
    
    if (!connectionSuccess) {
      console.error('❌ Failed to connect to Slack. Check your SLACK_TOKEN in .env');
      process.exit(1);
    }
    
    console.log('✅ Successfully connected to Slack!');
    
    // 2. Send a test message
    console.log('Sending test message...');
    const messageSuccess = await sendWeeklyReminder();
    
    if (messageSuccess) {
      console.log('✅ Test message sent successfully!');
    } else {
      console.error('❌ Failed to send test message. Check your SLACK_CHANNEL_ID in .env');
    }
    
  } catch (error) {
    console.error('Error during test:', error);
    process.exit(1);
  }
};

// Run the test
runTest(); 