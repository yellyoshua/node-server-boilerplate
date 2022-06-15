import request from '../../core/request.js';
import usersRepository from '../repositories/users.repository.js';

const getUsers = request((req) => {
  return usersRepository.getAll(req.query);
});

export default {getUsers};
