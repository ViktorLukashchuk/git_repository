import * as dotenv from 'dotenv-safe';
import * as fs from 'fs';
import { AuthConfigDto, ConfigDto, ApiConfigDto } from 'src/dtos/config.dto';

export class ConfigService {
    private _token: string;

    public constructor() {
        dotenv.config();
        this._token = '';
    }

    public getConfig(): ConfigDto {
        const authConfig = this.getAuthConfig();
        const apiConfig = this.getApiConfig();

        return {
            auth: authConfig,
            api: apiConfig
        };
    }

    private getAuthConfig(): AuthConfigDto {
        if (fs.existsSync('token.txt')) {
            this._token = fs.readFileSync('token.txt', 'utf8');
        }

        return {
            theCatsApi: {
                apiKey: process.env.THE_CATS_API_KEY ? process.env.THE_CATS_API_KEY : ''
            }
        };
    }

    private getApiConfig(): ApiConfigDto {
        return {
            theCatsApi: {
                baseUrl: 'https://api.thecatapi.com/v1'
            },
            thePetsApi: {
                baseUrl: 'https://petstore.swagger.io/v2/'
            }
        };
    }

    public updateJwtToken(token: string): void {
        fs.writeFileSync('token.txt', token);
    }
}
