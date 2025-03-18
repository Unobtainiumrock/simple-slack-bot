import { testConnection } from './slack/client';
import { scheduleWeeklyReminder } from './scheduler/scheduler';
import { sendWeeklyReminder } from './slack/messages';

/**
 * Initialize the application
 */
const init = async (): Promise<void> => {
  try {
    // Test connection to Slack
    const connectionSuccess = await testConnection();
    
    if (!connectionSuccess) {
      console.error('Failed to connect to Slack. Exiting...');
      process.exit(1);
    }
    
    // Schedule the weekly reminder
    scheduleWeeklyReminder();
    
    console.log('Slack Reminder Bot initialized successfully');
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('Shutting down...');
      process.exit(0);
    });
    
    // For testing purposes, you can uncomment this to send a test message
    // await sendWeeklyReminder();
    
  } catch (error) {
    console.error('Error initializing application:', error);
    process.exit(1);
  }
};

// Start the application
init(); 