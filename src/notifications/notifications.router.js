const notificationsServices = require("./notificaciones.services");
const router = require("express").Router();

router.post("/purchase", notificationsServices.postPurchaseNotification);

module.exports = router;
