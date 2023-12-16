const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
// const { commentsController } = require('../controllers');
const { commentController } = require('../controllers')
// middleware that is specific to this router

// router.get('/', commentsController.getLatestsPosts);
    router.get('/', commentController.getLatestsComments)
    router.post('/', commentController.createComment)
module.exports = router