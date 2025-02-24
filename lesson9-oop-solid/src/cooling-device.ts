export abstract class CoolingDevice {
    protected thermalSensorIn = 0;
    public energySource: string;
    public constructor(energySource: string) {
        this.energySource = energySource;
    }

    public abstract freezeWater(): void;

    public coolWater(temperature: number): void {
        while (this.thermalSensorIn > temperature) {
            this.thermalSensorIn--;
        }
    }
}
