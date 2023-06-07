require("dotenv").config();

module.exports = {
  api: {
    port: process.env.API_PORT,
    host: process.env.API_HOST,
    email: process.env.EMAIL,
    emailKey: process.env.EMAIL_KEY,
    botToken:  process.env.BOT_TOKEN
  },
};
