import { Fridge } from './fridge';

export class Freezer extends Fridge {
    public constructor(temp: number, size: string) {
        super(temp, size);
    }

    public superFreeze(): number {
        this.setTemperature(-20);
        return this.getTemperature;
    }
}
