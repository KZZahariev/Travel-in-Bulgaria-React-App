import * as request from '../lib/request';

const baseUrl = 'http://localhost:3000/api';

export const getAll = async () => {
    const result = await request.get(`${baseUrl}/announcements`);
    console.log(result);
    return result;
}

export const create = async (announcementData) => {
    const result = await request.post(`${baseUrl}/announcements`, announcementData);
    console.log(result);
    return result;
}