import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import users from './api/users';
import roles from './api/roles';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

import swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('../swagger.json');

app.get('/', function(req, res, next) {
  res.status(200).json({ message: 'Hello world' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1/users', users);
app.use('/api/v1/roles', roles);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
