const numArr = [1, 2, 3];
const strArr = ['1', 'test', 'true'];

function arrFunc(arr: number[]): void {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    console.log(sum);
}

function arrFunc2(...arrays: (string | number)[][]): string {
    return arrays
        .flat()
        .map((item) => String(item))
        .join('');
}

console.log('---------------------');
arrFunc(numArr);

console.log('---------------------');
console.log(arrFunc2(numArr, strArr));
