const car = {
    manufacturer: {
        name: 'Audi',
        country: 'Germany'
    },
    engine: {
        fuelType: 'Diesel',
        horsePower: 450
    },
    startEngine(engineFuelType, engineHorsePower) {
        const type = engineFuelType || this.engine.fuelType;
        const power = engineHorsePower || this.engine.horsePower;

        console.log(`Starting ${type} engine with ${power} horsepower...`);
    },

    get carDetails() {
        return `${this.manufacturer.name} car is made in ${this.manufacturer.country}, fuel type: ${this.engine.fuelType}, horse power: ${this.engine.horsePower} HP`;
    },

    set carDetails(details) {
        const [name, country, fuelType, horsePower] = details.split(', ');

        this.manufacturer.name = name;
        this.manufacturer.country = country;
        this.engine.fuelType = fuelType;
        this.engine.horsePower = horsePower;
    }
};

console.log(car.carDetails);
car.startEngine();
console.log('------------------');

car.carDetails = 'Ford, USA, petrol, 250';

console.log(car.manufacturer.name);
console.log(car.manufacturer.country);
console.log(car.engine.fuelType);
console.log(car.engine.horsePower);
console.log(car.carDetails);

console.log('------------------');
car.startEngine('Electro', 700);
