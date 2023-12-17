/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'

import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {}) //auth //accessToken

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.username, values.password, values.rePassword);

        // setAuth(result);

        // localStorage.setItem('accessToken', result._id); //must fix accessToken!!!!!!!!!!!!!!!!!1
        navigate('/auth/login')
    }
    
    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password)
        setAuth(result[0]);
        localStorage.setItem('accessToken', result[1])
        navigate('/')
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken') 
    }
    const authenticated = localStorage.getItem('accessToken')
    console.log(auth.username);
    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!authenticated,
    };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = "AuthContext"

export default AuthContext;