/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik";

import AuthContext  from "../../contexts/authContext";
import { registerSchema } from "../../schemas/index";


const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    RePassword: 'rePassword',
};

export default function Register() {
    const [ reg, setReg ] = useState({});

    const { registerSubmitHandler } = useContext(AuthContext);
    
    const onChange = (e) => {
        setReg(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = async (values) => {
        await registerSubmitHandler(values)
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RePassword]: '',
      },
      validationSchema: registerSchema,
      onSubmit,
      onChange
    })
    // const changeSubmitHandler = (e) => {
    //     setUserValue(e.target.value)
    // }
      return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 shadow-md rounded-md w-96">
              <h2 className="text-slate-100 text-2xl font-semibold mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-500 text-sm font-medium">Username</label>
                  <input 
                      type="text"
                      id="username"
                      name="username" 
                      values={values[RegisterFormKeys.Username]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.username && touched.username ? "border-2 border-rose-500 mt-1 block w-full rounded-md  focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                        />
                </div>
                {/* username validation  */}
                {errors.username && touched.username && (
                    <>
                        <p className="text-red-500">
                          {errors.username}
                        </p>
                    </>
                )}

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-500 text-sm font-medium">Email</label>
                  <input 
                      type="email"
                      id="email"
                      name="email" 
                      values={values[RegisterFormKeys.Email]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email ? "border-2 border-rose-500 mt-1 block w-full rounded-md  focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                        />
                </div>

                {/* Email validation  */}
                {errors.email && touched.email && (
                    <>
                        <p className="text-red-500" >
                          {errors.email}
                        </p>
                    </>
                )}


                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-500 text-sm font-medium">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password" 
                        placeholder="**********" 
                        values={values[RegisterFormKeys.Password]} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? "border-2 border-rose-500 mt-1 block w-full rounded-md  focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                        />
                  </div>
                  {/* <!-- Password validator --> */}
                  {errors.password && touched.password && (
                      <>
                            <p className="text-red-500" >
                                {errors.password}
                            </p>
                        </>
                    )}

                  <div className="mb-4">
                    <label htmlFor="rePassword" className="block text-gray-500 text-sm font-medium">Confirm Password</label>
                    <input 
                        type="password"
                        id="rePassword"
                        name="rePassword" 
                        placeholder="**********" 
                        values={values[RegisterFormKeys.RePassword]} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.rePassword && touched.rePassword ? "border-2 border-rose-500 mt-1 block w-full rounded-md  focus:bg-white focus:ring-0" : "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"}
                        />
                  </div>
                  {/* Confirm password validation  */}
                    {errors.rePassword && touched.rePassword && (
                        <>
                            <p className="text-red-500" >
                              {errors.rePassword}
                              </p>
                        </>
                    )}



                <button type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Register</button>
              </form>
              <p className="text-sm text-gray-500 mt-4">Already have an account? 
              <a className="text-blue-500 hover:text-blue-600"><Link to={'/login'}>Login</Link></a></p>
            </div>
          </div>
      )
}   