import * as request from '../lib/request';

// const baseUrl = 'http://localhost:3000/api';
const baseUrl = 'https://travelinbulgaria-kz-react.onrender.com';


export const create = async (commentData, userId, announcementId) => {
    const result = await request.post(`${baseUrl}/comments`, commentData, userId, announcementId);
    return result;
}

export const getAll = async (announcementId) => {
    const result = await request.get(`${baseUrl}/comments`,  announcementId);
    return result
}

export const del = async (commentData, userId, announcementId, commentId) => {
    const result = await request.del(`${baseUrl}/comments`, commentData, userId, announcementId, commentId);
    return result
}