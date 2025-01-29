let a1 = 1;

function playwWithVars() {
    const a = 1;
    let b = 2;
    b = 3;
    let c = 'test string';

    let e;
    e = a + b + a1;

    console.log(a, b, c, e);

    const booleanVar = true;
    const undefinedVar = undefined;

    console.log(booleanVar, undefinedVar);

    const obj = {
        key: 'value',
        key2: 'value2'
    };

    console.log(obj);

    return obj;
}

playwWithVars();

console.log('\n' + playwWithVars());
