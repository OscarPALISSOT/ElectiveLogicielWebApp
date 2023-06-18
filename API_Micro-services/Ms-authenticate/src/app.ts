import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import authenticate from './api/authenticate';
import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'hello world'
  });
});

app.use('/api/v1/authentication', authenticate);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
