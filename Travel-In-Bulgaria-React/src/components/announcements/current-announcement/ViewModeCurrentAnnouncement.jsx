/* eslint-disable react/prop-types */
import { useContext, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom" 
import AuthContext from "../../../contexts/authContext";
import * as announcementService from "../../../services/announcementService"
import useForm from "../../../hooks/useForm";
import AddComment from "../../comments/AddComment";
import announcementReducer from "./announcementReducer";

export default function ViewModeCurrentAnn(announcement) {
    const navigate = useNavigate();
    const { isAuthenticated, userId } = useContext(AuthContext);
    // const [isReserved, dispatch] = useReducer(announcementReducer, []);
    const isOwner = announcement.userId === userId;
    const comments = announcement.comments;
    const isReserved = announcement?.subscribers?.includes(userId);
    const [isReservedState, setIsReservedState] = useState(isReserved);

    const deleteButtonClickHandler = () => {
        const hasConfirmed = confirm(`Are you sure you want to delete this post - From: ${announcement.from} To: ${announcement.to} at: ${announcement.date}`)

        if (hasConfirmed) {
            announcementService.del(announcement._id)  
            navigate('/announcements')
        }
    }

    const subscribeForTraveling = async () => {
        const announcementId = announcement._id;
        // navigate(`/announcements/${announcement._id}`)
        setIsReservedState(!isReservedState)
        return announcementService.subscribe(announcementId);
        
    }

    const { onSubmit } = useForm(subscribeForTraveling) // values, onChange,

    // const isReserved = announcement?.subscribers?.includes(userId);

    return(
        <div className="p-10 mb-12 flex-nowrap no-scrollbar flex items-center justify-center opacity-90">
            <div className="bg-gray-800 p-8 shadow-md rounded-md w-96 transform transition-all hover:scale-105">
                <h2 className="text-slate-100 text-2xl font-semibold mb-4"></h2>
                <div className="mb-4">
                    {isOwner && (
                    <label htmlFor="title" className="block text-gray-500 text-sm font-medium my-2">I&apos;m
                        travel</label>
                    )}
                    {!isOwner && (
                        <label htmlFor="title" className="block text-gray-500 text-sm font-medium my-2">Do you want
                        to travel</label>
                        )}
                    <ul>
                        <li className="mr-2 mb-2">
                            <label htmlFor="from" className="block text-gray-500 text-sm font-medium">From: <span
                                    className="text-white">
                                    {announcement.from}</span></label>
                        </li>
                        <li className="mr-2 mb-2">
                            <label htmlFor="to" className="block text-gray-500 text-sm font-medium">To: <span
                                    className="text-white">
                                    {announcement.to}</span></label>
                        </li>
                        <li className="mr-7 mb-2">
                            <label htmlFor="price" className="block text-gray-500 text-sm font-medium">Price of ticket: <span
                                    className="text-white">
                                    {announcement.price}</span></label>
                        </li>
                        <li className="mr-7 mb-2">
                            <label htmlFor="date" className="block text-gray-500 text-sm font-medium">Date: <span
                                    className="text-white">
                                    {announcement.date}</span></label>
                        </li>
                        <li className="mr-7 mb-2">
                            <label htmlFor="seats" className="block text-gray-500 text-sm font-medium">Number of seats: <span
                                    className="text-white">
                                    {announcement.seats}</span></label>
                        </li>
                        <li className="mr-7 mb-2">
                            <label htmlFor="description" className="block text-gray-500 text-sm font-medium">Description: <span
                                    className="text-white">
                                    {announcement.description}</span></label>
                        </li>

                    </ul>
                </div>
                <ul >
                    {isAuthenticated && userId === announcement.userId && (
                    <ul >
                        <Link to={`/announcements/edit/${announcement._id}`} className="p-2 flex flex-nowrap">
                            <button className="transform transition-all hover:scale-105 w-full flex justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >Edit</button>
                        </Link>
                        <li className="p-2 flex flex-nowrap">
                            <button className="transform transition-all hover:scale-105 w-full flex justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                onClick={deleteButtonClickHandler}>Delete</button>
                        </li>
                    </ul>
                    )}

                    {isAuthenticated && userId !== announcement.userId && (
                    <ul >
                        {isReserved && (
                        <li className="p-2 flex flex-nowrap" >
                            <h3
                                className="w-full flex justify-center text-white py-2  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                You are already reserved.</h3>
                        </li>
                        )}
                        {!isReserved && (
                            <li className="transform transition-all hover:scale-105 p-2 flex flex-nowrap" >
                            <button className="w-full flex justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                 onClick={onSubmit}>Reserve</button>
                        </li>
                        )}
                    </ul>
                    )}
                </ul>

                <Link to={'/announcements'} className="transform transition-all hover:scale-105 p-2 flex flex-nowrap">
                    <button className="w-full flex justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                       >Back</button>
                </Link>

                {<AddComment {...comments}/>}
            </div>
        </div>
    )
}