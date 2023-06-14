//Dependencies and Imports
const functions = require("firebase-functions");
const express = require("express");
const notificationsRoutes = require("./notifications/notifications.router");
const cors = require("cors");

//Init Config
const app = express();
app.use(express.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.status(200).json("Ok!");
});
app.use("/api/v1/notifications", notificationsRoutes);

exports.app = functions.https.onRequest(app);
