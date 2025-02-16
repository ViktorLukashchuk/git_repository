class Car {
    manufacturer: {
        name: string;
        country: string;
    };
    engine: {
        fuelType: string,
        horsePower: number
    };

    constructor(name: string, country: string, fuelType: string, horsePower: number) {
        this.manufacturer = {
            name: name,
            country: country
        };
        this.engine = {
            fuelType: fuelType,
            horsePower: horsePower
        };
    }

    getCarDetails() {
        return `${this.manufacturer.name} car is made in ${this.manufacturer.country}, fuel type: ${this.engine.fuelType}, horse power: ${this.engine.horsePower} HP`;
    }

    updateCountry(newCountry: string) {
        this.manufacturer.country = newCountry;
    }

    updateEngineType(newEngineType: string) {
        this.engine.fuelType = newEngineType;
    }
}

const car1 = new Car("Audi", "Germany", "diesel", 450);
const car2 = new Car("Tesla", "USA", "electro", 700);

console.log(car1.getCarDetails());
console.log(car2.getCarDetails());

//Tesla also made in China

car2.updateCountry('China');
console.log(car2.getCarDetails());