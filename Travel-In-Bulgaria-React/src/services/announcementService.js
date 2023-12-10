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

export const create = async (announcementData, userId) => {
    const result = await request.post(`${baseUrl}/announcements`, announcementData, userId);
    return result;
}

export const edit = async (announcementId, announcementData) => {
    const result = await request.put(`${baseUrl}/announcements/${announcementId}`, announcementData);
    return result;
}

export const del = async (announcementId) => request.del(`${baseUrl}/announcements/${announcementId}/delete`);

export const subscribe = async (announcementId) => {
    await request.put(`${baseUrl}/announcements/${announcementId}/subscribe`)
}