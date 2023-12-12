import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useFormik } from "formik";

import * as announcementService from '../../services/announcementService' 
import AuthContext from "../../contexts/authContext";
import { createAnnouncement } from "../../schemas/index";

const AddAnnouncementFormKeys = {
    From: 'from',
    To: 'to',
    Price: 'price',
    Date: 'date',
    Seats: 'seats',
    Description: 'description',
};

const NewAnnouncement = () => {

    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const {createAnn, setCreateAnn} = useState({})

    const onSubmit = async (e) => {
        const announcementData = e;

        try {
            await announcementService.create(announcementData, userId);
            navigate('/announcements')
        } catch (error) {
            console.log(error);
        }
    };

    const onChange = (e) => {
        setCreateAnn(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const { values, errors, touched, handleSubmit,handleChange, handleBlur } = useFormik({
        initialValues: {
            [AddAnnouncementFormKeys.From]: '',
            [AddAnnouncementFormKeys.To]: '',
            [AddAnnouncementFormKeys.Price]: '',
            [AddAnnouncementFormKeys.Date]: '',
            [AddAnnouncementFormKeys.Seats]: '',
            [AddAnnouncementFormKeys.Description]: '',
        },
        validationSchema: createAnnouncement,
        onSubmit,
        onChange
    })


    return(
    <div className="min-h-screen flex items-center justify-center opacity-90">
        <div className="bg-gray-800 p-8 shadow-md rounded-md w-96 transform transition-all hover:scale-105">
            <h2 className="text-slate-100 text-2xl font-semibold mb-4">Add Announcement</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-500 text-sm font-medium my-2">Where are you travel?</label>
                    <ul className="p-2 flex flex-nowrap">
                        <li className="mr-2 mb-2">
                            <label htmlFor="from" className="block text-gray-500 text-sm font-medium">From:</label>
                            <input 
                                type="text" 
                                id="from" 
                                name="from"
                                value={values[AddAnnouncementFormKeys.From]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.from && touched.from ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                                />

                            {/* <!-- "From" validation --> */}
                            {errors.from && touched.from && (
                                <>
                                    <p className="text-red-500 text-sm" >
                                      {errors.from}
                                    </p>
                                </>
                            )}
                                {/* <p className="text-red-500" >
                                &quot;From&quot; is required.
                                </p>
                                <p className="text-red-500" >
                                &quot;From&quot; must be at least 2 characters long.
                                </p> */}
                           
                        </li>
                        <li className="mr-2 mb-2">
                            <label htmlFor="to" className="block text-gray-500 text-sm font-medium">To:</label>
                            <input 
                                type="text" 
                                id="to" 
                                name="to"
                                value={values[AddAnnouncementFormKeys.To]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.to && touched.to ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                                />
                            {/* <!-- "To" validation --> */}
                            {errors.to && touched.to && (
                                <>
                                    <p className="text-red-500 text-sm" >
                                      {errors.to}
                                    </p>
                                </>
                            )}
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
                            <input 
                                type="number" 
                                id="price" 
                                name="price"
                                value={values[AddAnnouncementFormKeys.Price]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.price && touched.price ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                              />

                            {/* <!-- "Price" validation --> */}
                            {errors.price && touched.price && (
                                <>
                                    <p className="text-red-500 text-sm" >
                                      {errors.price}
                                    </p>
                                </>
                            )}
                                {/* <p className="text-red-500" >
                                &quot;Price&quot; is required.
                                </p> */}
                        
                        </li>
                    </ul>
                    <ul>
                        <li className="mr-7 mb-2">
                            <label htmlFor="date" className="block text-gray-500 text-sm font-medium">Date and time:</label>
                            <input 
                                type="datetime-local" 
                                id="date" 
                                name="date"
                                value={values[AddAnnouncementFormKeys.Date]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.date && touched.date ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                               />
                            {/* <!-- "Date" validation --> */}
                            {errors.date && touched.date && (
                                <>
                                    <p className="text-red-500 text-sm" >
                                      {errors.date}
                                    </p>
                                </>
                            )}
                                {/* <p className="text-red-500" >
                                &quot;Date&quot; is required.
                                </p> */}
                        </li>
                    </ul>
                    <ul>
                        <li className="mr-7 mb-2">
                            <label htmlFor="seats" className="block text-gray-500 text-sm font-medium">Seats available:</label>
                            <input 
                                type="number" 
                                id="seats" 
                                name="seats"
                                value={values[AddAnnouncementFormKeys.Seats]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.seats && touched.seats ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                               />
                            {/* <!-- "Seats" validation --> */}
                            {errors.seats && touched.seats && (
                                <>
                                    <p className="text-red-500 text-sm" >
                                      {errors.seats}
                                    </p>
                                </>
                            )}
                                {/* <p className="text-red-500" >
                                &quot;Seats&quot; is required.
                                </p> */}
                        </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-500 text-sm font-medium">Description</label>
                    <textarea 
                        id="description" 
                        name="description"
                        value={values[AddAnnouncementFormKeys.Description]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.description && touched.description ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                       ></textarea>

                        {/* <!-- "description" validation --> */}
                        {errors.description && touched.description && (
                                <>
                                    <p className="text-red-500 text-sm" >
                                      {errors.description}
                                    </p>
                                </>
                            )}
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