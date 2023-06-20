import { NextFunction, Request, Response } from 'express';
import { checkJWT } from '../modules/jwt';


export function tokenmiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(403).json({ error: 'No token provided' } );
  }
  const token = authorization?.split(' ')[1];
  if (!checkJWT(token as string)) {
    res.status(403).json({ error: 'Invalid token' } );
  }
  next();
}