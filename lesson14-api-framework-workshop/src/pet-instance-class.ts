import { PetDto, Category, Tag } from './dtos/pet-api/pet.dto';

export class Pet implements PetDto {
    public id: number;
    public category: Category;
    public name: string;
    public photoUrls: string[] = ['string'];
    public tags: Tag[];
    public status: 'available' | 'pending' | 'sold' = 'available';

    public constructor(petId: number, petName: string) {
        this.id = petId;
        this.name = petName;
        this.category = {
            id: petId,
            name: petName
        };
        this.tags = [
            {
                id: petId,
                name: petName
            }
        ];
    }
}
