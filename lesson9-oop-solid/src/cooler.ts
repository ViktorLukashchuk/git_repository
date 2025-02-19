import { ICoolingDevice } from './icooling-device';
import { ICoolingDimensions } from './icooling-dimensions';

export class Cooler implements ICoolingDevice, ICoolingDimensions {
    private thermalSensorIn: number;
    public setTemperature(newTemp: number): void {
        this.thermalSensorIn = newTemp;
    }

    public get getTemperature(): number {
        return this.thermalSensorIn;
    }

    public energySource: string;

    public height: number;
    public width: number;
    public depth: number;

    public constructor(temperature: number, size: string) {
        this.thermalSensorIn = temperature;
        this.energySource = 'accumulator';
        const dimensions = size.split('x');
        this.height = Number(dimensions[0]);
        this.width = Number(dimensions[1]);
        this.depth = Number(dimensions[2]);
    }

    public freezeWater(): void {
        throw new Error('Cooler cannot freeze water');
    }
    public coolWater(temperature: number): void {
        while (this.thermalSensorIn > temperature) {
            this.thermalSensorIn--;
        }
    }
    public getParameters(): string {
        return `${this.height}x${this.width}x${this.depth}`;
    }
}
