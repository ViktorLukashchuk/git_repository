const numArr = [1, 2, 3];
const strArr = ['1', 'test', 'true'];

function arrFunc(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}

function arrFunc2(arr1, arr2) {
    let unitedArr = [...arr1, ...arr2];
    arrFunc(unitedArr);
}

function arrFunc3(...arrs) {
    let unitedArr = [...arrs];
    arrFunc(unitedArr);
}
// wanted to use it in order to receive one two or more arrs at the time but not able to do it properly without chatgpt(

console.log('---------------------');
arrFunc(numArr);
console.log('---------------------');
arrFunc2(numArr, strArr);

console.log('---------------------');
arrFunc3(numArr, strArr);
