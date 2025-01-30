const num1 = 12;
const num2 = 6;
const str1 = '12';

const strBool = 'true';
const bool1 = true;
const bool2 = false;

function comparison() {
    console.log('num 1 is less than num 2 ', num1 < num2);
    console.log('num 1 is bigger than num 2 ', num1 > num2);
    console.log('num 1 is equal to num 2 ', num1 == num2);
    console.log('num 1 is equal to str1 - soft comparison ', num1 == str1);
    console.log('num 1 is equal to str1 - strict comparison ', num1 === str1);
    console.log('strBool is equal to bool1 - soft comparison ', strBool == bool1);
}

function logical() {
    console.log('true AND false -', bool1 && bool2);
    console.log('true OR false -', bool1 || bool2);
    console.log('NOT true -', !bool1);
}

comparison();
logical();
