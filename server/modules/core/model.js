import mongoose from "mongoose";

export default (Model = mongoose.Model) => {
  return {
    async find(filter = {}, options = {}) {
			const {
				limit,
			} = options;

      const mongooseInstance = Model.find(filter);
      limit && mongooseInstance.limit(limit);

      return mongooseInstance.lean().exec();
    },
    async create(body = {}) {
      const entity = new Model({
        ...body,
      });

      return entity.save();
    },
  };
};