import express from 'express';
import cors from 'cors';
import routes from '../modules/routes';
import utils from '../utils';

const app = express();

// Parse application/JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Enable CORS
app.use(cors());

// Mount api routes
utils.applyRoutes(routes, app);

export default app;
