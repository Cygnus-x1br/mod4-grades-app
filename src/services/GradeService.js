import http from '../http-common';

const getAll = () => {
  console.log('Grade:' + grade);
  return http.get('/grade');
};

const get = (id) => {
  console.log('Id:' + id);
  return http.get(`/grade/:${id}`);
};

const create = (data) => {
  console.log(data);
  return http.post('/grade', data);
};

const update = (id, data) => {
  console.log('Id:' + id);
  return http.put(`/grade/:${id}`, data);
};

const remove = (id) => {
  console.log('Id:' + id);
  return http.delete(`/grade/:${id}`);
};

const removeAll = () => {
  return http.delete(`/grade`);
};

const findByName = (name) => {
  console.log('Name:' + name);
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
