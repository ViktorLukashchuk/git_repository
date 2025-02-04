for (let i = 0; i < 10; i++) {
    console.log('iterator value is ' + i);
}

console.log('-----------------');

let i = 100;
while (i >= 0) {
    console.log('iterator value is ' + i);
    i -= 10;
}

console.log('-----------------');

let h = 0;
do {
    console.log('iterator value is ' + h);
    h += 10;
} while (h <= 100);

console.log('-----------------');

const store = ['tv', 'pc', 'laptop', 'monitor', 'mobile'];

for (const item of store) {
    console.log(item);
}

console.log('-----------------');

const someone = {
    name: 'Vik',
    age: 32,
    occupation: 'QA',
    level: 'Senior'
};

for (const key in someone) {
    console.log(key + ': ' + someone[key]);
}
