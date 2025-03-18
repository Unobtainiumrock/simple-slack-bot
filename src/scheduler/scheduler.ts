import cron from 'node-cron';
import { appConfig } from '../config/config';
import { sendWeeklyReminder } from '../slack/messages';

// Every Thursday at 7:00 PM in the configured timezone
const WEEKLY_SCHEDULE = '*/5 * * * * *';

/**
 * Schedule the weekly reminder
 */
export const scheduleWeeklyReminder = (): void => {
  console.log(`Scheduling weekly reminder for Thursdays at 7:00 PM (${appConfig.scheduler.timezone})`);
  
  cron.schedule(WEEKLY_SCHEDULE, async () => {
    console.log('Executing scheduled weekly reminder');
    try {
      const success = await sendWeeklyReminder();
      if (success) {
        console.log('Weekly reminder sent successfully');
      } else {
        console.error('Failed to send weekly reminder');
      }
    } catch (error) {
      console.error('Error in weekly reminder job:', error);
    }
  }, {
    timezone: appConfig.scheduler.timezone
  });
  
  console.log('Reminder scheduled successfully');
}; 