import * as request from "../lib/request";

const baseUrl = 'http://localhost:3000/api';

export const register = async (email, username, password, rePassword) => {

    let isPasswordsMatched = true;
    if (password !== rePassword) {
        isPasswordsMatched = false
        console.log('Password mismatch!!!!!');
        return; // or throw new error
    }
    const result = await request.post(`${baseUrl}/register`, {
        email,
        username,
        password,
        //accessToken - moje da mu podadem
    });

    return result; 
};

export const login = async (email, password) => {

    const result = await request.post(`${baseUrl}/login`, {
        email,
        password        
    });

    return result;
};

export const logout = () => request.get(`${baseUrl}/users/logout`)
