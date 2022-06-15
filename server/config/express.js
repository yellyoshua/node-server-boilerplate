import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../modules/routes.js';
import helpers from '../helpers/index.js';

const app = express();

// Parse application/JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Enable CORS
app.use(cors());

// Mount api routes
helpers.applyRoutes(routes, app);

export default app;
