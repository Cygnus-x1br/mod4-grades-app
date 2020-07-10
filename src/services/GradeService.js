import http from '../http-common';

const getAll = () => {
  //console.log('Grade:' + grade);
  return http.get('/grade');
};

const get = (_id) => {
  console.log('Id:' + _id);
  return http.get(`/grade/${_id}`);
};

const create = (data) => {
  console.log(data);
  return http.post('/grade', data);
};

const update = (_id, data) => {
  console.log('Id:' + _id);
  return http.put(`/grade/${_id}`, data);
};

const remove = (_id) => {
  console.log('Id:' + _id);
  return http.delete(`/grade/${_id}`);
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
