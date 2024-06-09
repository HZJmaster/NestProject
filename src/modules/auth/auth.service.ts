import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  //   async validateUser(username: string, pass: string) {
  //     const user = { name: 'huang', password: '12321' };
  //     if (user && user.password) {
  //       const { password, ...result } = user;
  //       return result;
  //     }
  //     return null;
  //   }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userID };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
