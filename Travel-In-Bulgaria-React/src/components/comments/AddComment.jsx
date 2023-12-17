/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

import * as commentService from "../../services/commentService"
import * as announcementService from "../../services/announcementService"
import Comments from "./Comments";
import AuthContext from "../../contexts/authContext";
import { addCommentSchema } from "../../schemas";
import reducer from "../announcements/commentReducer";

const AddCommentFormKeys = {
    Comment: 'comment',
};

export default function AddComment() {
    const [addComment, setAddComment] = useState([])
    const [comments, dispatch] = useReducer(reducer, []);
    const { announcementId } = useParams();
    const { userId, } = useContext(AuthContext)

    useEffect(() => {
        announcementService.getOne(announcementId)
            .then((result) => {
                dispatch({
                    type:'GET_ALL_COMMENTS',
                    payload: result.comments
                })
            })
        }, [announcementId])
        
        const onSubmit = async (e) => {
            const commentData = e;
            try {
                await commentService.create(commentData, userId, announcementId);

                await announcementService.getOne(announcementId)
                    .then((result) => {
                        dispatch({
                            type:'ADD_COMMENT',
                            payload: Object.entries(result.comments).pop()[1]
                        })
                        // console.log(Object.entries(result.comments).pop()[1]);
                    });
                resetForm()
            } catch (error) {
                console.log(error);
            }
        };

    const onChange = (e) => {
        setAddComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const { values, errors, touched, handleSubmit,handleChange, handleBlur, resetForm } = useFormik({
        initialValues: {
            [AddCommentFormKeys.Comment]: '',
        },
        validationSchema: addCommentSchema,
        onSubmit,
        onChange,
        // enableReinitialize: true
    });

    const commentData = ''
    // const comments = announcement.comments

    async function deleteCommentClickHandler(commentId) {
        const hasConfirmed = confirm(`Are you sure you want to delete this comment`)
            // dispatch({
            //     type:'DELETE_COMMENT',
            //     payload: comment // Object.entries(result.comments).pop()[1]
            // })

        if (hasConfirmed) {
            commentService.del(commentData, userId, announcementId, commentId)  
            
            // navigate('/announcements')
            announcementService.getOne(announcementId)
                    .then((result) => {
                        let deletedComment = {}
                        for (let index = 0; index < Object.values(result.comments).length; index++) {
                            if (commentId === Object.values(result.comments)[index]._id) {
                                deletedComment = Object.values(result.comments)[index]
                            }
                        }
                        dispatch({
                            type:'DELETE_COMMENT',
                            payload: deletedComment
                        })
                        // console.log(Object.entries(result.comments).pop()[1]);
                    });
        }
    }

    let commentsState = comments

    return (
        <div className="container mx-auto p-4">

        <section className="bg-gray-400 p-6 rounded-lg shadow-md">
            <h3 className="text-l font-bold mb-4">Add comment</h3>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-gray-600 font-semibold">Comment</label>
                    <textarea 
                        type="text"
                        id="comment" 
                        name="comment" 
                        value={values[AddCommentFormKeys.Comment]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full border-2 border-gray-300 p-2 rounded-md"></textarea>
                            {errors.comment && touched.comment && (
                                <>
                                    <p className="text-red-500 text-sm" >
                                      {errors.comment}
                                    </p>
                                </>
                            )} 
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add comment</button>
            </form>

            {/* <!-- Comments --> */}
            <h3 className="text-l font-bold mb-4">Comments</h3>
            {comments.map((comment) => (
                <Comments key={comment._id} {...comment} {...commentsState} deleteCommentClickHandler={deleteCommentClickHandler}/>
            ))}
        </section>

    </div>
    )
}