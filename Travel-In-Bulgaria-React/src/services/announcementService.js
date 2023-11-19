import * as request from '../lib/request';

const baseUrl = 'http://localhost:3000/api';

export const getAll = async () => {
    const result = await request.get(`${baseUrl}/announcements`);
    return result;
}

export const getOne = async (announcementId) => {
    const result = await request.get(`${baseUrl}/announcements/${announcementId}`);
    return result;
}

export const create = async (announcementData) => {
    const result = await request.post(`${baseUrl}/announcements`, announcementData);
    return result;
}