//Dependencies and Imports
const express = require("express");
const config = require("../config");
const notificationsRoutes = require("./notifications/notifications.router");
const bot = require('./utils/telegraf')

//Init Config
const app = express();
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.status(200).json("Ok!");
});
app.use("/api/v1/notifications", notificationsRoutes);

//Telegraf
bot.launch()

//Server
app.listen(config.api.port, () => {
  console.log(`This Server is Active on ${config.api.host}`);
});
