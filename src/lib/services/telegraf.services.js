const bot = require("../../utils/telegraf");
const { updateUser } = require("../../notifications/notifications.controllers");
//6258913290 CHAT ID

const initChat = () => {
  bot.start((ctx) => {
    ctx.reply(`Hi ${ctx.chat.first_name}! Welcome to FZ Cybertech`);
  });
};
initChat();

//Funcion para obtener chatId
//Crear comando personalizado que mande el chatId y una vez obtenido actualizar el usuario
const assignChatId = async (docRef) => {
  bot.hears("/start", (ctx) => {
    updateUser(docRef, { chatId: ctx.chat.id || 6258913290 })
      .then((user) => {
        if (user) {
          console.log(user, "updated user");
        } else {
          console.log("Not Founded this user");
        }
      })
      .catch((err) => console.log(err.message));
  });
};

const purchaseNotification = (data) => {
  bot.telegram.sendMessage(data.chat, data.message);
};

module.exports = { initChat, assignChatId, purchaseNotification };
