const numArr = [1000, 25, 3, 150];
const strArr = ['1', 'hello', 'true', 'VS'];
const boolArr = [true, false, true];
const anyArr = [1, '2', true, null, [1, 2], { bOO: 1 }, 'koo'];

numArr.push(6);
console.log('after 6 push to arr ' + numArr);

console.log('to find el in arr - ' + numArr.find((el) => el == 25));
console.log('to unite 2 arrays - ' + [...numArr, strArr]);
console.log('length of arr - ' + boolArr.length);
console.log(Object.keys(anyArr));

strArr[5] = 'dog';
strArr.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

console.log('reversed arr' + strArr.reverse());

const numArrMap = numArr.map((i) => i + 2);
console.log('after Map manipulation ' + numArrMap);

const sortedArray = boolArr.sort();
console.log('sorted arr ' + sortedArray);

const strArrFromAny = anyArr.filter((el) => typeof el === 'string');
console.log('string values from anyArr ' + strArrFromAny);

strArr.pop();
console.log('to remove last item of arr ' + strArr);
