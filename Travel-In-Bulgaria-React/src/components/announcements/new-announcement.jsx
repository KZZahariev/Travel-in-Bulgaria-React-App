import { useNavigate } from "react-router-dom";
import * as announcementService from '../../services/announcementService' 

const NewAnnouncement = () => {

    const navigate = useNavigate();

    const createAnnouncementHandler = async (e) => {
        e.preventDefault();

        const announcementData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await announcementService.create(announcementData);
            navigate('/announcements')
        } catch (error) {
            console.log(error);
        }
    }

    return(
    <div className="min-h-screen flex items-center justify-center opacity-90">
        <div className="bg-gray-800 p-8 shadow-md rounded-md w-96 transform transition-all hover:scale-105">
            <h2 className="text-slate-100 text-2xl font-semibold mb-4">Add Announcement</h2>
            <form onSubmit={createAnnouncementHandler}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-500 text-sm font-medium my-2">Where are you travel?</label>
                    <ul className="p-2 flex flex-nowrap">
                        <li className="mr-2 mb-2">
                            <label htmlFor="from" className="block text-gray-500 text-sm font-medium">From:</label>
                            <input type="text" id="from" name="from"
                                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                />

                            {/* <!-- "From" validation --> */}
                                {/* <p className="text-red-500" >
                                &quot;From&quot; is required.
                                </p>
                                <p className="text-red-500" >
                                &quot;From&quot; must be at least 2 characters long.
                                </p> */}
                           
                        </li>
                        <li className="mr-2 mb-2">
                            <label htmlFor="to" className="block text-gray-500 text-sm font-medium">To:</label>
                            <input type="text" id="to" name="to"
                                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                />
                            {/* <!-- "To" validation --> */}
                                {/* <p className="text-red-500" >
                                &quot;To&quot; is required.
                                </p>
                                <p className="text-red-500" >
                                &quot;To&quot; must be at least 2 characters long.
                                </p>
                             */}
                        </li>
                    </ul>
                    <ul>
                        <li className="mr-7 mb-2">
                            <label htmlFor="price" className="block text-gray-500 text-sm font-medium">Price of ticket:</label>
                            <input type="number" id="price" name="price"
                                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent m- focus:border-gray-500 focus:bg-white focus:ring-0"
                              />

                            {/* <!-- "Price" validation --> */}
                                {/* <p className="text-red-500" >
                                &quot;Price&quot; is required.
                                </p> */}
                        
                        </li>
                    </ul>
                    <ul>
                        <li className="mr-7 mb-2">
                            <label htmlFor="date" className="block text-gray-500 text-sm font-medium">Date and time:</label>
                            <input type="datetime-local" id="date" name="date"
                                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent m- focus:border-gray-500 focus:bg-white focus:ring-0"
                               />
                            {/* <!-- "Date" validation --> */}
                                {/* <p className="text-red-500" >
                                &quot;Date&quot; is required.
                                </p> */}
                        </li>
                    </ul>
                    <ul>
                        <li className="mr-7 mb-2">
                            <label htmlFor="seats" className="block text-gray-500 text-sm font-medium">Seats available:</label>
                            <input type="number" id="seats" name="seats"
                                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent m- focus:border-gray-500 focus:bg-white focus:ring-0"
                               />
                            {/* <!-- "Seats" validation --> */}
                                {/* <p className="text-red-500" >
                                &quot;Seats&quot; is required.
                                </p> */}
                        </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-500 text-sm font-medium">Description</label>
                    <textarea id="description" name="description"
                        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-32 resize-none"
                       ></textarea>

                        {/* <!-- "description" validation --> */}
                            {/* <p className="text-red-500" >
                            &quot;Description&quot; is required.
                            </p>
                            <p className="text-red-500" >
                            &quot;Description&quot; must be at least 5 characters long.
                            </p> */}
                </div>
                <button type="submit"
                    className="transform transition-all hover:scale-105 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add
                    Announcement</button>
            </form>
        </div>
    </div>
    )
}

export default NewAnnouncement;