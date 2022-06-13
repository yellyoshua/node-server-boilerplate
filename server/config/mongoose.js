import mongoose from "mongoose";

async function connect(url) {
	return mongoose.connect(url, {
		useNewUrlParser: true,
	}).then(() => logger.info("Connected to MongoDB"));
}

export default {
	connect,
};