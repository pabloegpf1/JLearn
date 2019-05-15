const express = require('express');
const router = express.Router();
const passport = require('passport')
var inboxController = require("../controllers/inbox.controller.js");

router.get('/inbox', inboxController.list)


module.exports = router;