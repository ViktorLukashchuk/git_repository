import { PetDto, Category, Tag } from './dtos/pet-api/pet.dto';

export class Pet implements PetDto {
    public id: number;
    public category: Category;
    public name: string;
    public photoUrls: string[];
    public tags: Tag[];
    public status: 'available' | 'pending' | 'sold';

    public constructor(dto: PetDto) {
        this.id = dto.id;
        this.category = dto.category;
        this.name = dto.name;
        this.photoUrls = dto.photoUrls;
        this.tags = dto.tags;
        this.status = dto.status;
    }
}
