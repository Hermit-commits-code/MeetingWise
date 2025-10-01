// MeetingWise Slackbot entry point
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

// Basic slash command for cost calculation
app.command("/meetingwise", async ({ command, ack, respond }) => {
  await ack();
  respond({
    text: `Welcome to MeetingWise! Use this bot to calculate and report meeting costs.`,
  });
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ MeetingWise Slackbot is running!");
})();
