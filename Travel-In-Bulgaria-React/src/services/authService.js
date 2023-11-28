import * as request from "../lib/request";

const baseUrl = 'http://localhost:3000/api';

export const register = async (username, email, password, rePassword) => {

    let isPasswordsMatched = true;
console.log(`authService: ${username} - ${email} -${password} - ${rePassword}`);
    if (password !== rePassword) {
        isPasswordsMatched = false
        console.log('tuka si ebava maikata');
        return; // or throw new error
    }
    const result = await request.post(`${baseUrl}/register`, {
        username,
        email,
        password
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

