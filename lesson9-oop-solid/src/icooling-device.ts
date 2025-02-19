export interface ICoolingDevice {
    energySource: string;

    freezeWater(): void;
    coolWater(temperature: number): void;
}
