# Slack Reminder Bot

A simple Slack bot that sends automated reminders to fill out end-of-week emails every Thursday at 7 PM.

## Features

- Automated weekly reminders on Thursdays at 7 PM
- Customizable reminder message
- Configurable target channel

## Setup

1. Create a Slack app and bot token at https://api.slack.com/apps
2. Clone this repository
3. Copy `.env.example` to `.env` and fill in your Slack token and channel ID
4. Install dependencies:

```bash
npm install
```

5. Start the bot:

```bash
npm start
```

```bash
npm run build
```
6. Start the bot:

```bash
npm start
```

## Development

For local development, you can use:

```bash
npm run dev
```


## Configuration

Edit the `.env` file to configure:

- `SLACK_TOKEN`: Your Slack bot token
- `SLACK_CHANNEL_ID`: The ID of the channel to send reminders to
- `TIMEZONE`: The timezone for the scheduler (default: UTC)

## License

MIT


