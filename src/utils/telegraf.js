const { Telegraf } = require("telegraf");
const config = require("../../config");

const initBot =  () => {
  const bot =  new Telegraf(
    config.api.botToken
  );

  bot.launch();
};

module.exports = initBot;

/*
const { Telegraf } = require("telegraf");
const config = require("../../config");
const axios = require("axios");

const token = "TU_TOKEN_DE_TELEGRAM";
const chatId = "ID_DE_CHAT_DESTINO";
const mensaje = "¡Hola desde FlutterFlow!";

const initBot = () => {
  const url = `https://api.telegram.org/bot${config.api.botToken}/sendMessage`;

  axios
  .post(url, {
    chat_id: chatId,
    text: mensaje,
  })
  .then((response) => {
    // El mensaje se envió exitosamente
    console.log("Mensaje enviado:", response.data);
  })
  .catch((error) => {
    // Ocurrió un error al enviar el mensaje
    console.error(error);
  });

};

module.exports = initBot;


const TelegramBot = require('node-telegram-bot-api');
const token = 'TU_TOKEN_DE_TELEGRAM';
const bot = new TelegramBot(token, { polling: false });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log('Chat ID:', chatId);
});*/