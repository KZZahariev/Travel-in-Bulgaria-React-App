const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { announcementController, commentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', announcementController.getAnnouncements);
router.post('/',  announcementController.createAnnouncement); //auth()

router.get('/:announcementId', announcementController.getAnnouncement);
router.post('/:announcementId', auth(), commentController.createComment);
router.put('/:announcementId', auth(), announcementController.editAnnouncement);
router.delete('/:announcementId/delete', auth(), announcementController.deleteAnnouncement);
router.put('/:announcementId/subscribe', auth(), announcementController.subscribe);
router.put('/:announcementId/comments/:commentId', auth(), commentController.editComment);

router.delete('/:announcementId/comments/:commentId', auth(), commentController.deleteComment);

// router.get('/my-trips/:id/reservations', auth(), announcementController.getReservations);

module.exports = router