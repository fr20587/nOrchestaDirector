// Nest Module
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

// Service
import { AuthService } from './auth.service';

// Controller
import { AuthController } from './auth.controller';

// Schemas
import { AuthSchema } from './schema/auth.schema';
import { UserSchema } from '../users/schema/user.schema';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret:
        'bda3e9fda0dd3881499b99f58e9bbdd7464ae6fe1d7a65e3cbda4b907a7345aa3be0532cfae1a6fd4b4c2143cff59997d89c31dce4d8e6ca0cf69262135ef1e2',
      signOptions: {
        expiresIn: 10800,
      },
    }),
    MongooseModule.forFeature([
      { name: 'Auth', schema: AuthSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
