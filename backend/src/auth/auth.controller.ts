// auth.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  // Rota para validar o token
  @Post('validate')
  async validate(@Body('token') token: string) {
    if (!token) {
      throw new BadRequestException('Token is required');
    }
    const decoded = await this.authService.validateToken(token);
    return { valid: true, decoded };
  }
}
