const { userModel, announcementModel, commentModel } = require('../models');

function newComment(text, userId, announcementId) {
    return commentModel.create({ text, userId, announcementId })
        .then(comment => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { comments: comment._id }, $addToSet: { announcements: announcementId } }),
                announcementModel.findByIdAndUpdate({ _id: announcementId }, { $push: { comments: comment._id } }, { new: true }), //$addToSet: { subscribers: userId }
            ])
        })
}

function getLatestsComments(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    commentModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('announcementId userId')
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(next);
}

function createComment(req, res, next) {
    const  announcementId  = req.headers.announcementid;
    const  userId  = req.headers.userid;
    const  commentText  = req.body.comment;
console.log('createComment');
    newComment(commentText, userId, announcementId)
        .then(([_, updatedAnnouncement]) => res.status(200).json(updatedAnnouncement)) 
        .catch(next);
}

function editComment(req, res, next) {
    const { commentId } = req.params;
    const { commentText } = req.body;
    const { _id: userId } = req.user;

    // if the userId is not the same as this one of the comment, the comment will not be updated
    commentModel.findOneAndUpdate({ _id: commentId, userId }, { text: commentText }, { new: true })
        .then(updatedComment => {
            if (updatedComment) {
                res.status(200).json(updatedComment);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteComment(req, res, next) {
    const { commentid, announcementid, userid } = req.headers;
    // const { _id: userId } = req.user;
    Promise.all([
        commentModel.findOneAndDelete({ _id: commentid, userid }),
        userModel.findOneAndUpdate({ _id: userid }, { $pull: { comments: commentid } }),
        announcementModel.findOneAndUpdate({ _id: announcementid }, { $pull: { comments: commentid } }),
    ])
        // .then(([deletedOne, _, __]) => {
        //     if (deletedOne) {
        //         res.status(200).json(deletedOne)
        //     } else {
        //         res.status(401).json({ message: `Not allowed!` });
        //     }
        // })
        // .catch(next);
}

function like(req, res, next) {
    const { commentId } = req.params;
    const { _id: userId } = req.user;

    console.log('like')

    commentModel.updateOne({ _id: commentId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}

module.exports = {
    getLatestsComments,
    newComment,
    createComment,
    editComment,
    deleteComment,
    like,
}
