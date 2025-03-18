"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./slack/client");
const scheduler_1 = require("./scheduler/scheduler");
/**
 * Initialize the application
 */
const init = async () => {
    try {
        // Test connection to Slack
        const connectionSuccess = await (0, client_1.testConnection)();
        if (!connectionSuccess) {
            console.error('Failed to connect to Slack. Exiting...');
            process.exit(1);
        }
        // Schedule the weekly reminder
        (0, scheduler_1.scheduleWeeklyReminder)();
        console.log('Slack Reminder Bot initialized successfully');
        // Handle graceful shutdown
        process.on('SIGINT', () => {
            console.log('Shutting down...');
            process.exit(0);
        });
        // For testing purposes, you can uncomment this to send a test message
        // await sendWeeklyReminder();
    }
    catch (error) {
        console.error('Error initializing application:', error);
        process.exit(1);
    }
};
// Start the application
init();
