/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik";

import styles from "./Register.module.css"

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
    const [serverError, setServerError] = useState('');
    const { registerSubmitHandler } = useContext(AuthContext);
    
    const onChange = (e) => {
        setReg(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = async (values) => {
      try {
        await registerSubmitHandler(values)
      } catch (error) {
        setServerError(error.message);
      }
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
  
      return (
          <div className={styles["register-first-div"]}>
            <div className={styles["register-second-div"]}>
              <h2 className={styles["register-h2"]}>Register</h2>
              {serverError && (
                    <div className={styles['error-message-wrapper']}>
                        <p className={styles['error-message']}>Login failed: {serverError}</p>
                    </div>
                )}
              <form onSubmit={handleSubmit}>
                <div className={styles["register-form-div"]}>
                  <label htmlFor="username" className={styles["register-form-label"]}>Username</label>
                  <input 
                      type="text"
                      id="username"
                      name="username" 
                      values={values[RegisterFormKeys.Username]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.username && touched.username ? styles["register-form-input-errors"] : styles["register-form-input"]}
                        />
                {/* username validation  */}
                {errors.username && touched.username && (
                    <>
                        <p className={styles["register-errors"]}>
                          {errors.username}
                        </p>
                    </>
                )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className={styles["register-form-label"]}>Email</label>
                  <input 
                      type="email"
                      id="email"
                      name="email" 
                      values={values[RegisterFormKeys.Email]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email ? styles["register-form-input-errors"] : styles["register-form-input"]}
                        />
                {/* Email validation  */}
                {errors.email && touched.email && (
                    <>
                        <p className={styles["register-errors"]}>
                          {errors.email}
                        </p>
                    </>
                )}
                </div>

                  <div className="mb-4">
                    <label htmlFor="password" className={styles["register-form-label"]}>Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password" 
                        placeholder="**********" 
                        values={values[RegisterFormKeys.Password]} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? styles["register-form-input-errors"] : styles["register-form-input"]}/>
                  {/* <!-- Password validator --> */}
                  {errors.password && touched.password && (
                      <>
                            <p className={styles["register-errors"]}>
                                {errors.password}
                            </p>
                        </>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="rePassword" className={styles["register-form-label"]}>Confirm Password</label>
                    <input 
                        type="password"
                        id="rePassword"
                        name="rePassword" 
                        placeholder="**********" 
                        values={values[RegisterFormKeys.RePassword]} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.rePassword && touched.rePassword ? styles["register-form-input-errors"] : styles["register-form-input"]}/>
                  {/* Confirm password validation  */}
                    {errors.rePassword && touched.rePassword && (
                        <>
                            <p className={styles["register-errors"]}>
                              {errors.rePassword}
                              </p>
                        </>
                    )}
                  </div>
                <button type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Register</button>
              </form>
              <p className={styles["register-p"]}>Already have an account? 
              <a className={styles["register-a"]}><Link to={'/auth/login'}> Login</Link></a></p>
            </div>
          </div>
      )
}   