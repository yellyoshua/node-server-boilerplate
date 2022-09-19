import request from '../core/request.js';
import usersRepository from './users.repository.js';

export default {
  getUsers: request((req) => {
    return usersRepository.getAll(req.query);
  })
};
