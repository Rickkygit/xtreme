const express = require('express');
const controller = require('../controller/controller')

router = express.Router();

router.get("/", controller.index);
router.get("/about", controller.about);
router.get("/contact", controller.contact);
router.post("/sendMail", controller.submit)

module.exports = router;