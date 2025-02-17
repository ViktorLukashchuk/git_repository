
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geolocation;
}

export interface Geolocation {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}


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




