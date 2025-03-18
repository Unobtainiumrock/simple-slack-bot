"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = exports.slackClient = void 0;
const web_api_1 = require("@slack/web-api");
const config_1 = require("../config/config");
// Create a Slack WebClient instance
exports.slackClient = new web_api_1.WebClient(config_1.appConfig.slack.token);
// Test the connection to Slack
const testConnection = async () => {
    try {
        const result = await exports.slackClient.auth.test();
        if (result.ok) {
            console.log(`Connected to Slack as ${result.user} in team ${result.team}`);
            return true;
        }
        return false;
    }
    catch (error) {
        console.error('Error connecting to Slack:', error);
        return false;
    }
};
exports.testConnection = testConnection;
