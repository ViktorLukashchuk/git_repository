const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

const c = null;
const d = null;

const e = c ?? d ?? 4;

console.log(e);
