import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly configService: ConfigService) {}

    login(loginDto: LoginDto) {
        const adminUsername = this.configService.get<string>('ADMIN_USERNAME')
        const adminPassword = this.configService.get<string>('ADMIN_PASSWORD')
        const apiKey = this.configService.get<string>('ADMIN_API_KEY');

        const usernameIsValid = loginDto.username === adminUsername;
        const passwordIsValid = loginDto.password === adminPassword;

        if (!usernameIsValid || !passwordIsValid) {
            throw new UnauthorizedException('Usuário ou senha inválidos');
        }

        return {
            message: 'Login realizado com sucesso',
            apiKey,
        };
    }
}
