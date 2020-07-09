import http from '../http-common';

const getAll = () => {
  return http.get('/grade');
};

const get = (id) => {
  return http.get(`/grade/${_id}`);
};

const create = (data) => {
  return http.post('/grade', data);
};

const update = (id, data) => {
  return http.put(`/grade/${_id}`, data);
};

const remove = (id) => {
  return http.delete(`/grade/${_id}`);
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
