export class CoolingDevice {
    public energySource: string;
    public temperature: number;
    public name: string;
    public height: number;
    public width: number;
    public depth: number;

    public constructor(name: string, temperature: number, energySource: string, size: string) {
        this.name = name;
        this.energySource = energySource;
        const dimensions = size.split('x');
        this.height = Number(dimensions[0]);
        this.width = Number(dimensions[1]);
        this.depth = Number(dimensions[2]);
        this.temperature = temperature;
    }

    public setTemperature(newTemp: number): void {
        this.temperature = newTemp;
    }

    public get getTemperature(): number {
        return this.temperature;
    }

    public freezeWater(): number {
        this.setTemperature(-20);
        return this.getTemperature;
    }

    public getParameters(size: string): string {
        const dimensions = size.split('x');
        return `${Number(dimensions[0])}x${Number(dimensions[0])}x${Number(dimensions[0])}`;
    }

    public superFreeze(): number {
        this.setTemperature(-20);
        return this.getTemperature;
    }
}
