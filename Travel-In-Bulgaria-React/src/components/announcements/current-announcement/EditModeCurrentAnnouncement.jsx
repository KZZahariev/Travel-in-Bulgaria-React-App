/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

import * as announcementService from "../../../services/announcementService"

export default function EditModeCurrentAnn(){
    const navigate = useNavigate();
    const { announcementId } = useParams();
    const [ announcement, setAnnouncements ] = useState({
        from: '',
        to: '',
        price: '',
        date: '',
        seats: '',
        description: '',
    });

    useEffect(() => {
        announcementService.getOne(announcementId)
            .then(result => setAnnouncements(result))
    }, [announcementId]);

    const editAnnouncementSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await announcementService.edit(announcementId, values);
            navigate('/announcements')
        } catch (error) {
            console.log(error);
        }
    };

    const onChange = (e) => {
        setAnnouncements(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    // const { values, onChange, onSubmit } = useForm(editAnnouncementSubmitHandler, announcement)
    return(
        <div className="min-h-screen flex items-center justify-center opacity-90">
            <div className="bg-gray-800 p-8 shadow-md rounded-md w-96 transform transition-all hover:scale-105">
                <h2 className="text-slate-100 text-2xl font-semibold mb-4">Edit your announcement.</h2>
                <form onSubmit={editAnnouncementSubmitHandler}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-500 text-sm font-medium my-2">Where are you
                            travel?</label>
                        <ul className="p-2 flex flex-nowrap">
                            <li className="mr-2 mb-2">
                                <label htmlFor="from" className="block text-gray-500 text-sm font-medium">From:</label>
                                <input type="text" id="from" name="from" value={announcement.from} onChange={onChange}
                                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                    />
                            </li>
                            <li className="mr-2 mb-2">
                                <label htmlFor="to" className="block text-gray-500 text-sm font-medium">To:</label>
                                <input type="text" id="to" name="to" value={announcement.to} onChange={onChange}
                                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                    />
                            </li>
                        </ul>
                        <ul>
                            <li className="mr-7 mb-2">
                                <label htmlFor="price" className="block text-gray-500 text-sm font-medium">Price of
                                    ticket:</label>
                                <input type="number" id="price" name="price" value={announcement.price} onChange={onChange}
                                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent m- focus:border-gray-500 focus:bg-white focus:ring-0"
                                   />
                            </li>
                            <li className="mr-7 mb-2">
                                <label htmlFor="date" className="block text-gray-500 text-sm font-medium">Date and time:</label>
                                <input type="datetime-local" id="date" name="date" value={announcement.date} onChange={onChange}
                                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent m- focus:border-gray-500 focus:bg-white focus:ring-0"
                                    />
                            </li>
                            <li className="mr-7 mb-2">
                                <label htmlFor="seats" className="block text-gray-500 text-sm font-medium">Seats
                                    available:</label>
                                <input type="number" id="seats" name="seats" value={announcement.seats} onChange={onChange}
                                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent m- focus:border-gray-500 focus:bg-white focus:ring-0"
                                   />
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-500 text-sm font-medium">Description</label>
                        <textarea id="description" name="description" value={announcement.description} onChange={onChange} 
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-32 resize-none"
                            />
                    </div>
                    <li className="transform transition-all hover:scale-105 p-2 flex flex-nowrap">
                        <button type="submit"
                            className="w-full flex justify-center bg-gray-500 text-white py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2w-full rounded-md focus:ring-offset-2"
                            >Save</button>
                    </li>
                    <Link to={`/announcements/${announcement._id}`} className="transform transition-all hover:scale-105 p-2 flex flex-nowrap">
                        <button type="submit"
                            className="w-full flex justify-center bg-gray-500 text-white py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2w-full rounded-md focus:ring-offset-2"
                            >Back</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}