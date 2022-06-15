import {Joi} from 'express-validation';

export const createUserValidator = {
  body: {
    full_name: Joi.string().required(),
    country: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    status: Joi.string().valid('active', 'inactive').
    required(),
    gender: Joi.string().required()
  }
};
