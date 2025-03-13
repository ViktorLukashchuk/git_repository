import { describe, expect, test } from 'vitest';
import { ConfigService } from '../src/services/config.service';
import { FetchApiService } from 'src/services/pet-fetch-api.service';
import { PetsApi } from 'src/apis/pet-api/pet.api';
import { PetDto } from 'src/dtos/pet-api/pet.dto';

describe('The Pet API Images tests', () => {
    const configService = new ConfigService();
    const config = configService.getConfig();
    const fetchApi = new FetchApiService(config.api.thePetsApi.baseUrl);
    const petsApi = new PetsApi(fetchApi);
    const petId = 8888;
    const petName = 'patrick';
    const body: PetDto = {
        id: petId,
        category: {
            id: petId,
            name: petName
        },
        name: 'doggie',
        photoUrls: ['string'],
        tags: [
            {
                id: petId,
                name: petName
            }
        ],
        status: 'available'
    };

    describe('create Pet', () => {
        test('create Pet test', async () => {
            const [response, id] = await petsApi.createPet(body);
            expect(response.status).toBeOneOf([200, 201]);
            expect(id).toBeDefined();
        });
    });

    describe('Get Pet', () => {
        test('Get Pet test', async () => {
            const [response] = await petsApi.getMyPet(petId);
            expect(response.status).toBeOneOf([200, 201]);
        });
    });

    describe('delete a Pet', () => {
        test('delete Pet test', async () => {
            const [deleteResponse] = await petsApi.deleteMyPet(petId);
            expect(deleteResponse.status).toBeOneOf([200, 201]);
        });
    });
});
