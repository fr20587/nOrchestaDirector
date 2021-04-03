// Nest Modules
import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';

// Express
import { Request, Response, NextFunction } from 'express';

// Third's Modules
import jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { User } from 'src/apis/users/entities/user.entity';
import { IJWTPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private _jwtService: JwtService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // Ubicando el token
    const token = req.header('x-token');

    if (!token) {
      return res.status(403).json({
        ok: false,
        message: '403 - Token no válido',
      });
    }
    console.log(token);
    try {
      const decoded: IJWTPayload = this._jwtService.verify(token);
      req.user = decoded.id;
      const user = await this.userModel.findById(req.user, { password: 0 });
      if (!user) {
        return res.status(404).json({
          ok: false,
          message: '404 - Token no válido',
        });
      }
      console.log(`Request... ${req.user}`);
      next();
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: 'Error inesperado',
      });
    }
  }
}
