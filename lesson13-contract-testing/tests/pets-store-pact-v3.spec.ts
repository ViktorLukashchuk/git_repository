import { expect } from 'chai';
import * as path from 'path';
import { PactV3, MatchersV3, Verifier } from '@pact-foundation/pact';
import { PetStoreService } from 'src/services/pet-store.service';
import { DeleteDto, PetDto } from '../src/models/pet.dto';
const { like } = MatchersV3;

describe('PactV3 PetsStore consumer tests', () => {
    let petStoreService: PetStoreService;

    const provider = new PactV3({
        consumer: 'Pets-Web-v3',
        provider: 'Pets-API-v3'
    });

    const id = 45878545;
    const petExample: PetDto = {
        id: id,
        category: {
            id: id,
            name: 'cat'
        },
        name: 'RICK',
        photoUrls: ['string'],
        tags: [
            {
                id: id,
                name: 'my RICK'
            }
        ],
        status: 'available'
    };

    const UpdatedPetExample: PetDto = {
        id: id,
        category: {
            id: id,
            name: 'cat'
        },
        name: 'RICK',
        photoUrls: ['string'],
        tags: [
            {
                id: id,
                name: 'my RICK'
            }
        ],
        status: 'sold'
    };

    const deleteExample: DeleteDto = {
        code: 200,
        type: 'unknown',
        message: String(id)
    };

    const EXPECTED_BODY = like(petExample);
    const UPDATED_EXPECTED_BODY = like(UpdatedPetExample);
    const DELETE_RESPONSE = like(deleteExample);

    describe('create then update then request and then delete a pet', () => {
        it('returns the requested pet', () => {
            // Arrange
            provider
                .given('pet interaction')
                .uponReceiving('create a pet')
                .withRequest({
                    method: 'POST',
                    path: '/v2/pet',
                    body: petExample,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: EXPECTED_BODY
                })
                .uponReceiving('update a pet')
                .withRequest({
                    method: 'PUT',
                    path: '/v2/pet',
                    body: UpdatedPetExample,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: UpdatedPetExample
                })
                .uponReceiving('get a pet')
                .withRequest({
                    method: 'GET',
                    path: `/v2/pet/${id}`
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: UPDATED_EXPECTED_BODY
                })
                .uponReceiving('delete a pet')
                .withRequest({
                    method: 'DELETE',
                    path: `/v2/pet/${id}`
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: DELETE_RESPONSE
                });

            return provider.executeTest(async (mockserver) => {
                // Act
                petStoreService = new PetStoreService(mockserver.url);
                const responsePost = await petStoreService.createPet(petExample);
                const responsePut = await petStoreService.updatePet(UpdatedPetExample);
                const response = await petStoreService.getPet(id);
                const deleteResponse = await petStoreService.deletePet(id);

                // Assert
                expect(responsePost.data).to.deep.eq(petExample);
                expect(responsePut.data).to.deep.eq(UpdatedPetExample);
                expect(response.data).to.deep.eq(UpdatedPetExample);
                expect(deleteResponse.data).to.deep.eq(deleteExample);
            });
        });
    });
});

describe('PactV3 PetsStore Provider Verification', () => {
    it('validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/Pets-Web-v3-Pets-API-v3.json')]
        }).verifyProvider();
    });
});
