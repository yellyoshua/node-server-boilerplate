import { request, response } from "express";

async function RequestHandler(req = request, res = response, next) {}

export default (requestHandler = RequestHandler) => {
	return async (req = request, res = response) => {
		try {
			const response = await requestHandler(req, res);
			res.status(200).json({ response, errors: [] });
		} catch (error) {
			res.status(500).json({ errors: [error.message] });
		}
	}
}