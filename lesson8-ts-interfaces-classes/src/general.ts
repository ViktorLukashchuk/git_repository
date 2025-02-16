// Знайти в інтернеті будь-який запит, який би вертав JSON-респонз із декількома рівнями (Наприклад з ДЗ лекції 6).
// Описати повернутий JSON інтерфейсом або класом
// Написати функцію, яка надсилатиме запит на вебресурс (п.2) і повертатиме типізований об’єкт (п.3)

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

async function getJson() : Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const json: User[] = await response.json();
    return json;
}

(async () => {
    const data = await getJson();
    //console.log(data)
    //console.log(data[1].company.name);
    //console.log(data[0].address.geo);
})();

//Написати іншу функцію, яка братиме отриманий об’єкт (п.4) і переводитиме його в інший (наприклад, міститиме коротку інформацію про об’єкт, 
// суму якихось полів та ін. і сама логіка переводу має відбуватися в конструкторі нового класу, const obj2 = new Obj2(obj1))

class ModifiedUser {
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
async function fetchAndTransformUsers(): Promise<ModifiedUser[]> {
    const users = await getJson();
    return users.map(user => new ModifiedUser(user)); 
}

fetchAndTransformUsers().then(users => {
    users[0].updateName("Anderson");
    users[0].updateEmail("anderson@gmail.com");
    console.log(users);
});

