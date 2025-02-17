import { User } from './interfaces';

export class ModifiedUser {
    fullName: string;
    contact: {
        email: string;
        phone: string;
    };
    location: string;
    companyName: string;

    constructor(user: User) {
        this.fullName = user.name;
        this.contact = {
            email: user.email,
            phone: user.phone
        };
        this.location = `${user.address.city}, ${user.address.street}`;
        this.companyName = user.company.name;
    }

    updateName(newName: string) {
        this.fullName = newName;
    }

    updateEmail(newEmail: string) {
        this.contact.email = newEmail;
    }
}





