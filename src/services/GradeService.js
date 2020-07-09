import http from '../http-common.js';

const getAll = () => {
  return http.get('/grade');
};

const get = (_id) => {
  return http.get(`/grade/${id}`);
};

const create = (data) => {
  return http.post('/grade', data);
};

const update = (_id, data) => {
  return http.put(`/grade/${id}`, data);
};

const remove = (_id) => {
  return http.delete(`/grade/${id}`);
};

const removeAll = () => {
  return http.delete(`/grade`);
};

const findByName = (name) => {
  return http.get(`/grade?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};
