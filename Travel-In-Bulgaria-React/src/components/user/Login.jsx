/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { useFormik } from "formik";

import styles from "./Login.module.css"

import AuthContext from "../../contexts/authContext";
import { loginSchema } from "../../schemas/index";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { logState, setLogState } = useState({})

    const onChange = (e) => {
        setLogState(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

     const onSubmit = async (values) => {

        await loginSubmitHandler(values)
    }

    const { values, errors, touched, handleBlur, handleSubmit, handleChange, } = useFormik({
        initialValues: {
            [RegisterFormKeys.Email]: '',
            [RegisterFormKeys.Password]: ''
        },
        validationSchema: loginSchema,
        onSubmit,
        onChange
    })
    return(
        <div className={styles["login-main-div"]}>
            <div className={styles["login-second-div"]}>
                <h2 className={styles["login-h2"]}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles["login-form-div"]}>
                        <label htmlFor="email" className={styles["login-form-label"]}>Email</label>
                        <input 
                            type="email"
                            id="email" 
                            name="email" 
                            value={values[RegisterFormKeys.Email]} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? styles["login-form-input-errors"] : styles["login-form-input"]}>
                        </input>
                        {errors.email && touched.email && (
                                <>
                                    <p className={styles["login-errors"]} >
                                      {errors.email}
                                    </p>
                                </>
                            )}
                    </div>

                    <div className={styles["login-form-div"]}>
                        <label htmlFor="password" className={styles["login-form-label"]}>Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={values[RegisterFormKeys.Password]} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? styles["login-form-input-errors"] : styles["login-form-input"]}>
                        </input>
                            {errors.password && touched.password && (
                                <>
                                    <p className={styles["login-errors"]} >
                                      {errors.password}
                                    </p>
                                </>
                            )}                    
                    </div>

                    <button type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Login</button>
                </form>
                <p className={styles["login-p"]}>Don&apos;t have an account?<a
                        className={styles["login-a"]}><Link to={'/auth/register'}>Register</Link></a></p>
            </div>
        </div>
    )
}