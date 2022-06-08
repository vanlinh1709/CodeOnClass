import api from './axios';
const prefix = '/students';

export const getStudents = () => api.get(prefix);
export const getStudent = (id) => api.get(`${prefix}/${id}`);
export const delStudent = (id) => api.delete(`${prefix}/${id}`);
export const createStudent = (data) => api.post(prefix, data);
export const updateStudent = (id, data) => api.put(`${prefix}/${id}`, data);