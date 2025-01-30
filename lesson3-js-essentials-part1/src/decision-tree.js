const boo1 = true;
const bool2 = false;
const num1 = 1;
const num2 = -5;

if (boo1 && bool2) {
    console.log('if is triggered');
} else {
    console.log('else is triggered');
}

if (boo1 && bool2) {
    console.log('if is triggered');
} else if (boo1 || bool2) {
    console.log('else if is triggered');
} else {
    console.log('else is triggered');
}

console.log(num1 > num2 ? 'num1 bigger' : 'num2 bigger');
