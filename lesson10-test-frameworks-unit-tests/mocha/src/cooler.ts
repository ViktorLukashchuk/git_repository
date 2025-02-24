import { CoolingDevice } from './cooling-device';
import { ICoolingDimensions } from './icooling-dimensions';

export class Cooler extends CoolingDevice implements ICoolingDimensions {
    public energySource: string;
    public height: number;
    public width: number;
    public depth: number;

    public constructor(temperature: number, size: string) {
        super('electricity');

        this.thermalSensorIn = temperature;
        this.energySource = 'electricity';
        const dimensions = size.split('x');
        this.height = Number(dimensions[0]);
        this.width = Number(dimensions[1]);
        this.depth = Number(dimensions[2]);
    }

    public setTemperature(newTemp: number): void {
        this.thermalSensorIn = newTemp;
    }

    public get getTemperature(): number {
        return this.thermalSensorIn;
    }

    public freezeWater(): void {
        console.error('The Cooler cant freeze the water');
    }

    public getParameters(): string {
        return `${this.height}x${this.width}x${this.depth}`;
    }
}
