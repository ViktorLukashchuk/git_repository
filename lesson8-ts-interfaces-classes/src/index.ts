import { ModifiedUser , User } from './general';

// Знайти в інтернеті будь-який запит, який би вертав JSON-респонз із декількома рівнями (Наприклад з ДЗ лекції 6).
// Описати повернутий JSON інтерфейсом або класом
// Написати функцію, яка надсилатиме запит на вебресурс (п.2) і повертатиме типізований об’єкт (п.3)

async function getJson() : Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const json: User[] = await response.json();
    return json;
}

(async () => {
    const data = await getJson();
    console.log(data);
    console.log("---------------------------");
    console.log(data[1].company.name);
    console.log("---------------------------");
    console.log(data[0].address.geo);
    console.log("---------------------------");
})();

//Написати іншу функцію, яка братиме отриманий об’єкт (п.4) і переводитиме його в інший (наприклад, міститиме коротку інформацію про об’єкт, 
// суму якихось полів та ін. і сама логіка переводу має відбуватися в конструкторі нового класу, const obj2 = new Obj2(obj1))

async function fetchAndTransformUsers(): Promise<ModifiedUser[]> {
    const users = await getJson();
    return users.map(user => new ModifiedUser(user)); 
}

fetchAndTransformUsers().then(users => {
    users[0].updateName("Anderson");
    users[0].updateEmail("anderson@gmail.com");
    console.log(users);
});

// class Car {
//     manufacturer: {
//         name: string;
//         country: string;
//     };
//     engine: {
//         fuelType: string,
//         horsePower: number
//     };

//     constructor(name: string, country: string, fuelType: string, horsePower: number) {
//         this.manufacturer = {
//             name: name,
//             country: country
//         };
//         this.engine = {
//             fuelType: fuelType,
//             horsePower: horsePower
//         };
//     }

//     getCarDetails() {
//         return `${this.manufacturer.name} car is made in ${this.manufacturer.country}, fuel type: ${this.engine.fuelType}, horse power: ${this.engine.horsePower} HP`;
//     }

//     updateCountry(newCountry: string) {
//         this.manufacturer.country = newCountry;
//     }

//     updateEngineType(newEngineType: string) {
//         this.engine.fuelType = newEngineType;
//     }
// }

// const car1 = new Car("Audi", "Germany", "diesel", 450);
// const car2 = new Car("Tesla", "USA", "electro", 700);

// console.log(car1.getCarDetails());
// console.log(car2.getCarDetails());

// //Tesla also made in China

// car2.updateCountry('China');
// console.log(car2.getCarDetails());