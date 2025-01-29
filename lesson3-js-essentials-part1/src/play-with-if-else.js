const b1 = true;
const b2 = false;

if (b1 && b2) {
    console.log ('if waorked');
} else {
    console.log ('else worked');
}

console.log('-------------------');
if (b1 && b2) {
    console.log ('if waorked');
} else if (b1 || b2) {
    console.log ('else if worked');
} else {
    console.log ('else worked');
}

console.log('-------------------');
if (b1 && b2) {
    console.log ('if waorked');
}
if (b1 || b2) {
    console.log ('else if worked');
}

console.log('-------------------');
console.log(b1 && b2 ? 'if waorked' : 'else worked');

const a = -1;
const b = a > 0 ? 'positive' : 'negative';
console.log(b);
