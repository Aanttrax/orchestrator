import { NextFunction, Request, Response } from 'express';
import AuthService from '@services/auth.service';

export const isAuthenticatedMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers?.['auth-token'];
    if (!token) res.status(401).json({ success: false, response: 'Access denied' });
    const isAuthenticated: boolean = await AuthService.isAuthenticated(token as string);
    if (!isAuthenticated) res.status(403).json({ success: false, error: 'Invalid or expired token.' });
    next();
  } catch (e: unknown) {
    next(e);
  }
};
