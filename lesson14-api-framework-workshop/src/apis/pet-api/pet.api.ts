import { IApiService } from '../../services/interfaces/i-api.service';
import { PetDto } from 'src/dtos/pet-api/pet.dto';

export class PetsApi {
    public constructor(private apiService: IApiService) {}

    public async getMyPet(petId: number): Promise<[Response, PetDto]> {
        const response = await this.apiService.get(`pet/${petId}`);
        const responseJson = await response.json();
        return [response, responseJson];
    }
    public async deleteMyPet(petId: number): Promise<[Response, PetDto]> {
        const response = await this.apiService.delete(`pet/${petId}`);
        const responseJson = await response.json();
        return [response, responseJson];
    }

    public async createPet(petId: number, petName: string): Promise<[Response, PetDto]> {
        const body = {
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
        const response = await this.apiService.post('pet', body);
        const responseJson = await response.json();
        return [response, responseJson];
    }
}
