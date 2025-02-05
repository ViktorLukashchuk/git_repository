const numArr = [1, 2, 3];
const strArr = ['1', 'test', 'true'];

const arrFunc = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
};

const arrFunc2 = function (arr1, arr2) {
    let unitedArr = [...arr1, ...arr2];
    arrFunc(unitedArr);
};

const arrFunc3 = function (...arrs) {
    let unitedArr = [...arrs];
    arrFunc(unitedArr);
};
// wanted to use it in order to receive one two or more arrs at the time but not able to do it properly without chatgpt(

console.log('---------------------');
arrFunc(numArr);
console.log('---------------------');
arrFunc2(numArr, strArr);

console.log('---------------------');
arrFunc3(numArr, strArr);
