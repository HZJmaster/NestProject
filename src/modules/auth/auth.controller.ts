import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //登录测试
  @UseGuards(AuthGuard('local'))
  @Post('/auth/login')
  async login(@Request() req) {
    console.log('controller', req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getProfile(@Request() req) {
    console.log('controller', req.user);
    return req.user;
  }
}
