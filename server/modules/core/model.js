import mongoose from 'mongoose';

export default (Model = mongoose.Model) => {
  return {
    async find (filter = {}, options = {}) {
      const {
        limit
      } = options;

      const mongooseInstance = Model.find(filter);
      if (limit) {
        mongooseInstance.limit(limit);
      }
      const data = await mongooseInstance.lean().exec();

      return data;
    },
    async create (body = {}) {
      const entity = new Model({
        ...body
      });
      const data = await entity.save();

      return data;
    }
  };
};
