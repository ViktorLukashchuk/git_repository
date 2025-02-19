import { Fridge } from './fridge';
import { Cooler } from './cooler';
import { ICoolingDevice } from './icooling-device';
import { ICoolingDimensions } from './icooling-dimensions';
import { Freezer } from './freezer';

const fridge = new Fridge(6, '225x65x50');

console.log('Current temperature in fridge is: ' + fridge.getTemperature);

coolWater(fridge);
console.log('Water in fridge is cooled to the next temperature ' + fridge.getTemperature);

fridge.freezeWater();

console.log('Current temperature in fridge after freezing is: ' + fridge.getTemperature);

function coolWater(cool: ICoolingDevice): void {
    cool.coolWater(5);
}

const cooler = new Cooler(3, '40x40x20');

coolWater(cooler);
console.log('Water cooled to the next temperature ' + cooler.getTemperature);

const freezer = new Freezer(-2, '40x45x70');
console.log('Current temperature in freezer is: ' + freezer.getTemperature);

freezer.superFreeze();
console.log('Super Freeze temp is: ' + freezer.getTemperature);

console.log('--------------');
function getDimensions(cool: ICoolingDimensions): void {
    console.log(cool.getParameters());
}

getDimensions(fridge);
getDimensions(cooler);
