/* eslint-disable prettier/prettier */
// Nest Module
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

// Third's Module
import { ExtractJwt, Strategy } from 'passport-jwt';

// Configurations
import { Configuration } from '../../../config/config.keys';

// Service
import { ConfigService } from 'src/config/config.service';
import { UsersService } from 'src/apis/users/users.service';

// Interface
import { IJWTPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrtegy extends PassportStrategy(Strategy) {
  constructor(
    private readonly _configService: ConfigService,
    private readonly userService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      //! TODO: corregir secretOrKey: _configService.get(Configuration.JWT_SECRET_KEY),
      secretOrKey: 'bda3e9fda0dd3881499b99f58e9bbdd7464ae6fe1d7a65e3cbda4b907a7345aa3be0532cfae1a6fd4b4c2143cff59997d89c31dce4d8e6ca0cf69262135ef1e2',
    });
  }

  public async validate(payload: IJWTPayload) {
    const { id } = payload;
    const foundUser = await this.userService.findOne(id);

    if (!foundUser) {
      throw new UnauthorizedException();
    } else {
      return payload;
    }
  }
}
