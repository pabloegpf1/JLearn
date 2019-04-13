const express = require('express');
const courseController = require('../controllers/course.controller');

const router = express.Router();

router.get(`/`, courseController.list);

module.exports = router;