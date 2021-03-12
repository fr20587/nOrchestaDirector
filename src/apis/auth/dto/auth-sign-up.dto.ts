import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthSignUpDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(20)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'La contraseña deberá terner entre 8 y 20 caracteres e incluir mayúsculas, minúsculas números y símbolos como: ! " ? $ % ^ &.',
  })
  password: string;
}
