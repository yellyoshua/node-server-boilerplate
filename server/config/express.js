import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "../modules/routes.js";
import helpers from "../helpers/index.js";

const app = express();

// parse application/JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS
app.use(cors());

// mount api routes
helpers.applyRoutes(routes, app);

export default app;
