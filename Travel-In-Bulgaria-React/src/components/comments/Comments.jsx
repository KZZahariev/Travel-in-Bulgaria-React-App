/* eslint-disable react/prop-types */
import { useContext, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

import * as commentService from "../../services/commentService"
import * as announcementService from "../../services/announcementService"
import AuthContext from "../../contexts/authContext";
import reducer from "../announcements/commentReducer";
import { login } from "../../services/authService";


export default function Comments({
    _id,
    userId,
    text,
    commentsState,
    deleteCommentClickHandler,
}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    

    const onDeleteButtonClickHandle = () => setShowDeleteModal(true);
    const closeDeleteModal = () => setShowDeleteModal(false);

    // const commentData = ''
    const { isAuthenticated, userId: user } = useContext(AuthContext);
    // const { announcementId } = useParams()
    const isOwner = user === userId._id;
    // const [comments, dispatch] = useReducer(reducer, []);
    // // const comments = announcement.comments
    // const deleteCommentClickHandler = async () => {
    //     const hasConfirmed = confirm(`Are you sure you want to delete this comment`)

    //     if (hasConfirmed) {
    //         commentService.del(commentData, userId._id, announcementId, _id)  
    //         // navigate('/announcements')
    //         await announcementService.getOne(announcementId)
    //                 .then((result) => {
    //                     dispatch({
    //                         type:'DELETE_COMMENT',
    //                         payload: Object.entries(result.comments).pop()[1]
    //                     })
    //                     // console.log(Object.entries(result.comments).pop()[1]);
    //                 });
    //     }
    // }

    return (
        <>
        
            <div>
                {/* <!-- Примерен коментар --> */}
                <div className="border-t-2 border-gray-200 pt-4">
                    <p className="text-gray-600">From: <span className="font-semibold">{userId?.username}</span></p>
                    <p className="mt-2">{text}</p>
                    {isAuthenticated && isOwner &&(
                        <button onClick={() => deleteCommentClickHandler(_id)} type="submit" className="bg-blue-500 text-white text-xs px-4 py-2 rounded-md hover:bg-blue-600">Delete</button>
                    )}
                    {/* {showDeleteModal ? (
                            <div onClick={closeDeleteModal}></div>
                        ) : (
                            ''
                        )}
                        {showDeleteModal && (
                                <DeleteComment
                                    onClose={closeDeleteModal}
                                    deleteCommentHandler={deleteCommentClickHandler}
                                    commentId={_id}
                                    user
                                />
            )} */}
                </div>
            </div>
            
        </>
    )
}