/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import AuthContext from "../../contexts/authContext";


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

    const { isAuthenticated, userId: user } = useContext(AuthContext);
    const isOwner = user === userId._id;

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
                </div>
            </div>
            
        </>
    )
}