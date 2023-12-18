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
    const [auth, setAuth] = usePersistedState('auth', {});

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.username, values.password, values.rePassword);

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

    const editProfileHandler = async (userData) => {
            let res = await authService.editUserInfo(userData)
            setAuth(res);
            navigate('/users/profile')
    } 

    const authenticated = localStorage.getItem('accessToken')
    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        editProfileHandler,
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