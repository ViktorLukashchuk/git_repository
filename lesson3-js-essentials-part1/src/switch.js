const boo1 = true;
const bool2 = false;

switch (boo1 || bool2) {
    case true:
        console.log('TRUE');
        break;
    case false:
        console.log('FALSE');
        break;
    default:
        console.log('BAD REQUEST');
        break;
}
