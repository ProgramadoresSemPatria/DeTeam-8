import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email: string;

  @IsNotEmpty()
  password: string;
}
