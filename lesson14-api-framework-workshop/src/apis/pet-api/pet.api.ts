import { Pet } from 'src/pet-instance-class';
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
        const petInstance = new Pet(petId, petName);
        const response = await this.apiService.post('pet', petInstance);
        const responseJson = await response.json();
        return [response, responseJson];
    }
}
