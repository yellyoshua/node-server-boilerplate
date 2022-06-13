import { validate } from "express-validation";
import usersController from "../controllers/users.controller.js";
import { createUserValidator } from "../validators/users.validator.js";

export default [
	{
		path: '/users',
		method: 'get',
		handlers: [
			usersController.getUsers,
		],
	},
	{
		path: '/users',
		method: 'post',
		handlers: [
			// validate(createUserValidator),
		],
	}
]