import usersController from './users.controller.js';

export default [
  {
    path: '/users',
    method: 'get',
    handlers: [
      usersController.getUsers
    ]
  },
  {
    path: '/users',
    method: 'post',
    handlers: [
      // Validate(createUserValidator),
    ]
  }
];
