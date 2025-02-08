const numArr = [1, 2, 3];
const strArr = ['1', 'test', 'true'];

const arrowArrFunc = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
};

const arrowArrFunc2 = (arr1, arr2) => {
    let unitedArr = [...arr1, ...arr2];
    arrowArrFunc(unitedArr);
};

console.log('---------------------');
arrowArrFunc(numArr);
console.log('---------------------');
arrowArrFunc2(numArr, strArr);

// using reduce for arr
const arrFunc = (arr) => console.log(arr.reduce((sum, num) => sum + num, 0));
arrFunc(numArr);
