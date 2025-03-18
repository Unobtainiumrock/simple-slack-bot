"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleWeeklyReminder = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const config_1 = require("../config/config");
const messages_1 = require("../slack/messages");
// Every Thursday at 7:00 PM in the configured timezone
const WEEKLY_SCHEDULE = '0 19 * * 4';
/**
 * Schedule the weekly reminder
 */
const scheduleWeeklyReminder = () => {
    console.log(`Scheduling weekly reminder for Thursdays at 7:00 PM (${config_1.appConfig.scheduler.timezone})`);
    node_cron_1.default.schedule(WEEKLY_SCHEDULE, async () => {
        console.log('Executing scheduled weekly reminder');
        try {
            const success = await (0, messages_1.sendWeeklyReminder)();
            if (success) {
                console.log('Weekly reminder sent successfully');
            }
            else {
                console.error('Failed to send weekly reminder');
            }
        }
        catch (error) {
            console.error('Error in weekly reminder job:', error);
        }
    }, {
        timezone: config_1.appConfig.scheduler.timezone
    });
    console.log('Reminder scheduled successfully');
};
exports.scheduleWeeklyReminder = scheduleWeeklyReminder;
