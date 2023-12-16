/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

import * as announcementService from "../../../services/announcementService"
import { useFormik } from "formik";
import { editAnnouncementSchema } from "../../../schemas";
import Spinner from "../../spinner/spinner";

const EditAnnouncementFormKeys = {
    From: 'from',
    To: 'to',
    Price: 'price',
    Date: 'date',
    Seats: 'seats',
    Description: 'description',
};

export default function EditModeCurrentAnn(){
    const navigate = useNavigate();
    const { announcementId } = useParams();
    const { isLoading, setIsLoading } = useState(true)
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
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    }, [announcementId]);

    const onSubmit = async (e) => {

        const announcementData = e;
        // const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await announcementService.edit(announcementId, announcementData);
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
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            [EditAnnouncementFormKeys.From]: announcement[EditAnnouncementFormKeys.From] || '',
            [EditAnnouncementFormKeys.To]: announcement[EditAnnouncementFormKeys.To] || '',
            [EditAnnouncementFormKeys.Price]: announcement[EditAnnouncementFormKeys.Price] || '',
            [EditAnnouncementFormKeys.Date]: announcement[EditAnnouncementFormKeys.Date] || '',
            [EditAnnouncementFormKeys.Seats]: announcement[EditAnnouncementFormKeys.Seats] || '',
            [EditAnnouncementFormKeys.Description]: announcement[EditAnnouncementFormKeys.Description] || '',
        },
        validationSchema: editAnnouncementSchema,
        onSubmit,
        onChange,
        enableReinitialize: true
    });
    // const { values, onChange, onSubmit } = useForm(editAnnouncementSubmitHandler, announcement)
    return(
        <div className="min-h-screen flex items-center justify-center opacity-90">
            {isLoading ? <Spinner /> : (
            <div className="bg-gray-800 p-8 shadow-md rounded-md w-96 transform transition-all hover:scale-105">
                <h2 className="text-slate-100 text-2xl font-semibold mb-4">Edit your announcement.</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-500 text-sm font-medium my-2">Where are you
                            travel?</label>
                        <ul className="p-2 flex flex-nowrap">
                            <li className="mr-2 mb-2">
                                <label htmlFor="from" className="block text-gray-500 text-sm font-medium">From:</label>
                                <input 
                                    type="text" 
                                    id="from" 
                                    name="from" 
                                    value={values[EditAnnouncementFormKeys.From]} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.from && touched.from ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-red-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                                    />
                                    {/* <!-- "From" validation --> */}
                                    {errors.from && touched.from && (
                                        <>
                                            <p className="text-red-500 text-sm" >
                                              {errors.from}
                                            </p>
                                        </>
                                    )}  
                            </li>
                            <li className="mr-2 mb-2">
                                <label htmlFor="to" className="block text-gray-500 text-sm font-medium">To:</label>
                                <input 
                                    type="text" 
                                    id="to" 
                                    name="to" 
                                    value={values[EditAnnouncementFormKeys.To]} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.from && touched.from ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-red-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                                   />
                                    {/* <!-- "To" validation --> */}
                                    {errors.to && touched.to && (
                                        <>
                                            <p className="text-red-500 text-sm" >
                                              {errors.to}
                                            </p>
                                        </>
                                    )}
                            </li>
                        </ul>
                        <ul>
                            <li className="mr-7 mb-2">
                                <label htmlFor="price" className="block text-gray-500 text-sm font-medium">Price of
                                    ticket:</label>
                                <input 
                                    type="number" 
                                    id="price" 
                                    name="price" 
                                    value={values[EditAnnouncementFormKeys.Price]} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.from && touched.from ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-red-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                                   />
                                   {/* <!-- "Price" validation --> */}
                                    {errors.price && touched.price && (
                                        <>
                                            <p className="text-red-500 text-sm" >
                                              {errors.price}
                                            </p>
                                        </>
                                    )}   
                            </li>
                            <li className="mr-7 mb-2">
                                <label htmlFor="date" className="block text-gray-500 text-sm font-medium">Date and time:</label>
                                <input 
                                    type="datetime-local" 
                                    id="date" 
                                    name="date" 
                                    value={values[EditAnnouncementFormKeys.Date]} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.from && touched.from ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-red-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent m- focus:border-gray-500 focus:bg-white focus:ring-0"}
                                    />
                                    {/* <!-- "Date" validation --> */}
                                    {errors.date && touched.date && (
                                        <>
                                            <p className="text-red-500 text-sm" >
                                              {errors.date}
                                            </p>
                                        </>
                                    )}
                            </li>
                            <li className="mr-7 mb-2">
                                <label htmlFor="seats" className="block text-gray-500 text-sm font-medium">Seats
                                    available:</label>
                                <input 
                                    type="number" 
                                    id="seats" 
                                    name="seats" 
                                    value={values[EditAnnouncementFormKeys.Seats]} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.from && touched.from ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-red-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                                   />
                                   {/* <!-- "Seats" validation --> */}
                                    {errors.seats && touched.seats && (
                                        <>
                                            <p className="text-red-500 text-sm" >
                                              {errors.seats}
                                            </p>
                                        </>
                                    )}
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-500 text-sm font-medium">Description</label>
                        <textarea 
                            type="text" 
                            id="description" 
                            name="description" 
                            value={values[EditAnnouncementFormKeys.Description]} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            className={errors.description && touched.description ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-red-500 focus:bg-white focus:ring-0 h-32 resize-none" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-32 resize-none"}
                            />
                             {/* <!-- "description" validation --> */}
                            {errors.description && touched.description && (
                                    <>
                                        <p className="text-red-500 text-sm" >
                                          {errors.description}
                                        </p>
                                    </>
                                )}
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
            )}
        </div>
    )
}