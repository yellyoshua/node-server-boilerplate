import usersModel from '../models/users.model.js';

export default {
  async getAll (query = {}) {
    const {
      limit,
      skip,
      sort,
      sortBy,
      ...filter
    } = query;

    const options = {
      limit,
      skip,
      sort,
      sortBy
    };
    const data = await usersModel.find(filter, options);
    
    return data;
  }
};
