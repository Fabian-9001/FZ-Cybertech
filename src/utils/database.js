const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const credentials = require("../../keys.json");

initializeApp({
  credential: cert(credentials),
});

const database = getFirestore();

module.exports = database;
