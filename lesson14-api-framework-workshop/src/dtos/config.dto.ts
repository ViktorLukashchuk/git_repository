export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theCatsApi: TheCatsApiAuthConfigDto;
}

export interface TheCatsApiAuthConfigDto {
    apiKey: string;
}

export interface ApiConfigDto {
    theCatsApi: TheCatsApiConfigDto;
    thePetsApi: ThePetsApiConfigDto;
}

export interface TheCatsApiConfigDto {
    baseUrl: string;
}

export interface ThePetsApiConfigDto {
    baseUrl: string;
}
