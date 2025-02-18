import { User } from './interfaces';

export class ModifiedUser {
    public fullName: string;
    public contact: {
        email: string;
        phone: string;
    };
    public location: string;
    public companyName: string;

    public constructor(user: User) {
        this.fullName = user.name;
        this.contact = {
            email: user.email,
            phone: user.phone
        };
        this.location = `${user.address.city}, ${user.address.street}`;
        this.companyName = user.company.name;
    }

    public updateName(newName: string): void {
        this.fullName = newName;
    }

    public updateEmail(newEmail: string): void {
        this.contact.email = newEmail;
    }
}
