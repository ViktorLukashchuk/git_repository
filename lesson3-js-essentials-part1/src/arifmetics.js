const a = 15;
const b = 5;

const c = 'string 1';
const d = ' and string 2';

const e = null;

const f = true;
const g = false;

function funcNumber() {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}

function funcString() {
    console.log(c + d);
    console.log(c - d);
}

function funcBoolean() {
    console.log(f + g);
    console.log(f - g);
    console.log(f * g);
}

function funcDiffTypes() {
    console.log(a + d);
    console.log(b + f);
    console.log(a * g);
    console.log(e + b);
}

funcNumber();
funcString();
funcBoolean();
funcDiffTypes();
