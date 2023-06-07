const notificationsControllers = require("./notifications.controllers");
const mailer = require("../utils/mailer");
const config = require("../../config");

const { purchaseNotification } = require("../lib/services/telegraf.services");

const postPurchaseNotification = (req, res) => {
  const { docRef } = req.body;
  notificationsControllers
    .findUserByReference(docRef)
    .then(async (user) => {
      if (user) {
        await mailer.sendMail({
          from: `<${config.api.email}>`,
          to: user.email,
          subject: "Su Factura Electrónica de FZ Cybertech",
          text: "This message is sended from nodemailer",
          html: `
       <h1>Hola ${user["display_name"]}</h1>
       <p>Te adjuntamos la factura electrónica de tu compra. Si tienes alguna consulta sobre tu factura o sobre tu compra, por favor no dudes en contactarnos al correo <a href="mailto:ventas@fzcybertech.com">ventas@fzcybertech.com</a>  o al teléfono: <a href="tel:1234-5678">1234-5678.</a> </p>
       <p>También encontrarás adjunto el comprobante electrónico en formato XML, emitido conforme lo establecido en la resolución de Facturación Electrónica No. DGT-R-48-2016 del 07 de octubre del 2016 de la Dirección General de Tributación Directa.</p>
       <p>Favor no contestar este correo.</p>
       <p>Muchas gracias por tu preferencia!</p>
       <p>El equipo de FZ Cybertech</p>
       <a href:${config.api.email}>${config.api.email}</a>
        `,
        });
        if (user.chatId) {
          purchaseNotification({
            chat: user.chatId,
            message: "Compra realizada!",
          });
          res.status(200).json("Notification sended");
        } else {
          notificationsControllers
          //Obtener chatId de manera dinamica con el bot
            .updateUser(docRef, { chatId: 6258913290 })
            .then(() => {
              purchaseNotification({
                chat: 6258913290,
                message: "Compra realizada! Desde de la cracion del chatId",
              });
              res.status(200).json("Updated User");
            })
            .catch((err) => res.status(400).json(err.message));
        }
      } else {
        res.status(404).json({
          message: `User with document reference ${docRef} not found`,
        });
      }
    })
    .catch((err) => console.log(err.message));
};

module.exports = { postPurchaseNotification };
