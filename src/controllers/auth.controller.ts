import { Request, Response, NextFunction } from 'express';
import AuthService from '@services/auth.service';

export default class AuthController {
  static async signUp(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token: string = await AuthService.signUp(req.body);
      res.status(200).header('auth-token', token).json({ success: true, response: 'user created' });
    } catch (e: unknown) {
      next(e);
    }
  }

  static async signIn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token: string = await AuthService.signIn(req.body);
      res.status(200).header('auth-token', token).json({ success: true, response: 'logged-in user' });
    } catch (e: unknown) {
      next(e);
    }
  }
}
