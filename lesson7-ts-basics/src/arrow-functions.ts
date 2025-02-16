const numArr1 = [1, 2, 3];
const strArr2 = ['1', 'test', 'true'];

const arrFuncArrow = (arr: number[]): void => {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    console.log(sum);
};

const arrFuncArrow2 = (...arrays: (string | number)[][]): string => {
    return arrays
        .flat()
        .map((item) => String(item))
        .join('');
};

console.log('---------------------');
arrFuncArrow(numArr1);

console.log('---------------------');
console.log(arrFuncArrow2(numArr1, strArr2));
