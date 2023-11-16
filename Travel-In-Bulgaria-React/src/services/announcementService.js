import * as request from '../lib/request';

const baseUrl = 'http://localhost:3000/api';

export const create = async (announcementData) => {
    const result = await request.post(`${baseUrl}/announcements`, announcementData);
    console.log(result);
    return result
}