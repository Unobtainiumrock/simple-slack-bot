"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Validate required environment variables
const requiredEnvVars = ['SLACK_TOKEN', 'SLACK_CHANNEL_ID'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}
exports.appConfig = {
    slack: {
        token: process.env.SLACK_TOKEN,
        channelId: process.env.SLACK_CHANNEL_ID
    },
    scheduler: {
        timezone: process.env.TIMEZONE || 'UTC'
    }
};
