export abstract class CoolingDevice {
    protected thermalSensorIn = 0;
    public energySource: string;
    public constructor(energySource: string) {
        this.energySource = energySource;
    }

    public freezeWater(): void {
        while (this.thermalSensorIn > 0) {
            this.thermalSensorIn--;
        }
    }

    public abstract coolWater(temperature: number): void;
}
