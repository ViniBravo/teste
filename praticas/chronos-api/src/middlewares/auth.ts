import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type TokenPayload = {
  sub: string;
};

export type AuthenticatedRequest = Request & {
  userId?: string;
};

export function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não informado.' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as TokenPayload;

    req.userId = decoded.sub;

    return next();
  } catch {
    return res.status(401).json({ message: 'Token inválido.' });
  }
}