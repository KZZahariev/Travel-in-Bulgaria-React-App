const { announcementModel, userModel } = require('../models');
const { newComment } = require('./commentsController')

function getAnnouncements(req, res, next) {
    announcementModel.find()
        .populate('userId')
        .then(announcements => res.json(announcements))
        .catch(next);
}

function getAnnouncement(req, res, next) {
    const { announcementId } = req.params;
    announcementModel.findById(announcementId)
        .populate({
            path: 'comments',
            populate: {
                path: 'userId'
            }
        })
        .then(announcement => res.json(announcement))
        .catch(next);
}


function createAnnouncement(req, res, next) {
    const { from, to, price, date, seats, description } = req.body;
    const userId = req.headers.userid;
    // const { _id: userId } = req.user;
    announcementModel.create({ from, to, price, date, seats, description, userId})
            .then(announcement => userModel.updateOne({ _id: userId }, { $addToSet: { announcements: announcement._id } }),)
            .then(announcement => res.status(200).json(announcement))
            .catch(next)
        // .then(announcement => {
        //     newComment(description, userId, announcement._id) // userId,
        //         .then(([_, updatedAnnouncement]) => res.status(200).json(updatedAnnouncement))
        // })
        .catch(next);
}

function subscribe(req, res, next) {
    const announcementId = req.params.announcementId;
    // const userId = req.headers.userid;
    const { _id: userId } = req.user;
    // const { _id: userId } = req.headers.userid;
    announcementModel.findByIdAndUpdate({ _id: announcementId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedAnnouncement => {
            res.status(200).json(updatedAnnouncement)
        })
        .catch(next);
};

function editAnnouncement(req, res, next) {
    const id  = res.req.params['announcementId'];

    const { from, to, price, date, seats, description } = req.body;

    announcementModel.findByIdAndUpdate(id, { from, to, price, date, seats, description }, { runValidators: true, new: true })
        .then(x => { res.status(200).json(x) })
        .catch(next);
}

async function deleteAnnouncement(req, res, next){

    const announcementId  = req.params['announcementId'];
    const { _id: userId } = req.user;

    const announcement = await announcementModel.findByIdAndDelete(announcementId);
    const user = await userModel.findOneAndUpdate({ _id: userId }, { $pull: { announcements: announcementId } })
    return;
    
}

module.exports = {
    getAnnouncements,
    createAnnouncement,
    getAnnouncement,
    subscribe,
    editAnnouncement,
    deleteAnnouncement
}
