/* eslint-disable @stylistic/indent */
import { IApiService } from './interfaces/i-api.service';
export class FetchApiService implements IApiService {
    public constructor(private baseUrl: string) {}

    public async get(uri: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = {
            ...{
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            ...headers
        };

        return fetch(`${this.baseUrl}${uri}`, {
            method: 'GET',
            headers: defaultHeaders
        });
    }

    public async post(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = {
            ...{
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            ...headers
        };

        return await fetch(`${this.baseUrl}${uri}`, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify(body)
        });
    }

    public async delete(
        uri: string,
        params?: Record<string, string | number | boolean>,
        headers?: Record<string, string>
    ): Promise<Response> {
        const defaultHeaders = {
            ...{
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            ...headers
        };

        return fetch(`${this.baseUrl}${uri}`, {
            method: 'DELETE',
            headers: defaultHeaders
        });
    }
}
