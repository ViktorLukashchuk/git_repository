import { ModifiedUser } from './classes';
import { User } from './interfaces';
import { EquilateralTriangle, IsoscelesTriangle, Triangle } from './abstraction';

// Сформувати файл abstraction.ts, у якому придумати композицію для наслідування та реалізувати абстракцію й наслідування.

const equilateralTriangle = new EquilateralTriangle(5);
const isoscelesTriangle = new IsoscelesTriangle(5, 6);

function output(obj: Triangle): string {
    return `sides of triangle are ${obj.a}, ${obj.b}, ${obj.c} with perimeter ${obj.calcPerimeter()} and square ${obj.calcSquare()}`;
}

console.log(output(equilateralTriangle));
console.log(output(isoscelesTriangle));
console.log('---------------------------');

// Знайти в інтернеті будь-який запит, який би вертав JSON-респонз із декількома рівнями (Наприклад з ДЗ лекції 6).
// Описати повернутий JSON інтерфейсом або класом
// Написати функцію, яка надсилатиме запит на вебресурс (п.2) і повертатиме типізований об’єкт (п.3)

async function getJson(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const json: User[] = await response.json();
    return json;
}

(async () => {
    const data = await getJson();
    console.log(data);
    console.log('---------------------------');
    console.log(data[1].company.name);
    console.log('---------------------------');
    console.log(data[0].address.geo);
    console.log('---------------------------');
})();

//Написати іншу функцію, яка братиме отриманий об’єкт (п.4) і переводитиме його в інший (наприклад, міститиме коротку інформацію про об’єкт,
// суму якихось полів та ін. і сама логіка переводу має відбуватися в конструкторі нового класу, const obj2 = new Obj2(obj1))

async function fetchAndTransformUsers(): Promise<ModifiedUser[]> {
    const users = await getJson();
    return users.map((user) => new ModifiedUser(user));
}

fetchAndTransformUsers().then((users) => {
    users[0].updateName('Anderson');
    users[0].updateEmail('anderson@gmail.com');
    console.log(users);
});
