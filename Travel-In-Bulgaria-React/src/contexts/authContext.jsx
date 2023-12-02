/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('accessToken', {}) //auth

    const registerSubmitHandler = async (values) => {
        console.log(`authContext: ${values.email} - ${values.username} - ${values.password} - ${values.rePassword}`);
        const result = await authService.register(values.email, values.username, values.password, values.rePassword); //

        setAuth(result._id);

        // localStorage.setItem('accessToken', result._id); //must fix accessToken!!!!!!!!!!!!!!!!!1
        
        navigate('/')
    }

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password)

        setAuth(result._id);

        // localStorage.setItem('accessToken', result._id)

        navigate('/')
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken') 
    }

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        username: auth.username || auth.username,
        email: auth.email,
        userId: auth.userId,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = "AuthContext"

export default AuthContext;