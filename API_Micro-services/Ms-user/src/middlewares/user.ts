import users from '../api/users';
import { NextFunction, Request, Response } from 'express';

users.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Time:', Date.now());
  next();
});