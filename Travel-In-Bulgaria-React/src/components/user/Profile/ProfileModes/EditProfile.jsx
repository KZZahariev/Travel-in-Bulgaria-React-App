import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

import * as authService from "../../../../services/authService"
import { editProfileSchema } from "../../../../schemas";
import AuthContext from "../../../../contexts/authContext";

const EditProfileFormKeys = {
    Username: 'username',
    Email: 'email',
};

const EditProfile = () => {

    // const navigate = useNavigate();
    const { editProfileHandler } = useContext(AuthContext);
    const [user, setUser] = useState({
        username: '',
        email: ''
    });

    // const {  } = useParams()
    const { userId } = useContext(AuthContext)

    useEffect(() => {
        authService.getUserInfo()
            .then((result) => setUser(result))
    },[userId]);

    const onSubmit = async (e) => {
        const userData = e;

        await editProfileHandler(userData)
        // try {
        //     await authService.editUserInfo(userData)
        //     navigate('/users/profile')
        // } catch (error) {
        //     console.log(error);
        // }
    }

    const onChange = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };


    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            [EditProfileFormKeys.Username]: user[EditProfileFormKeys.Username] || '',
            [EditProfileFormKeys.Email]: user[EditProfileFormKeys.Email] || '',
        },
        validationSchema: editProfileSchema,
        onSubmit,
        onChange,
        enableReinitialize: true
    });

    return (
    <div className="bg-cover flex flex-col min-h-screen bg-fixed bg-[url(./assets/road-mountains-tarmac-sunrise-morning-macos-big-sur-stock-5k-7680x4320-3996.jpg)]">
        <div className="transform transition-all hover:scale-105 max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full"
                    src='https://i0.wp.com/theconstructor.org/wp-content/uploads/2019/08/diego-jimenez-A-NVHPka9Rk-unsplash.jpg?fit=5472%2C3648&ssl=1'
                    alt='road'/>
            </div>            
                <form onSubmit={handleSubmit}>
                    <div className="text-center mt-2">
                        <div>
                            <h2 className="font-semibold">Username: </h2>
                            <input 
                                type="text" 
                                id="username"
                                name="username"
                                value={values[EditProfileFormKeys.Username]}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                className={errors.username && touched.username ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                                />
                                {errors.username && touched.username && (
                                <>
                                    <p className="text-red-500 text-sm" >
                                      {errors.username}
                                    </p>
                                </>
                                )}
                        </div>
                        <div>
                            <p className="text-gray-500">Email: </p>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                value={values[EditProfileFormKeys.Email]}
                                onChange={onChange}
                                onBlur={handleBlur}
                                className={errors.email && touched.email ? "border-2 border-rose-500 mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                                />
                                {errors.email && touched.email && (
                                <>
                                    <p className="text-red-500 text-sm" >
                                      {errors.email}
                                    </p>
                                </>
                                )}
                        </div>
                    </div>
                    <div className="p-4 border-t  mt-2 inline-flex justify-center items-center space-x-7">
                        <button
                            className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white py-3 w-40 mr-1">Save</button>
                        <Link to={'/users/profile'}><button
                            className="block mx-auto rounded-full bg-red-500 hover:shadow-lg font-semibold text-white py-3 w-40 mr-1">Cancel</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default EditProfile