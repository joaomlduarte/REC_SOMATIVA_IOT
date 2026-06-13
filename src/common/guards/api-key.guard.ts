import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ApiKeyGuard implements CanActivate {
    constructor(private readonly configService: ConfigService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        const recievedKey = request.headers['x-api-key'];
        const apiKey = Array.isArray(recievedKey) ? recievedKey[0] : recievedKey;

        const validApiKey = this.configService.get<string>('ADMIN_API_KEY');

        if (!validApiKey || apiKey !== validApiKey) {
            throw new UnauthorizedException('API key inválida ou ausente');
        }

        return true;
    }
}