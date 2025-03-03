import { CoolingDevice } from './cooling-device';

export class DbConnectionExample {
    public devices: CoolingDevice[];

    public constructor(devices: CoolingDevice[]) {
        this.devices = devices;
    }

    public findHigherThen(height: number): CoolingDevice[] {
        return this.devices.filter((device) => device.height > height);
    }

    public findWiderThen(width: number): CoolingDevice[] {
        return this.devices.filter((device) => device.width > width);
    }

    public batteryDevice(): CoolingDevice[] {
        return this.devices.filter((device) => device.energySource == 'battery');
    }

    public freezerDevice(): CoolingDevice[] {
        return this.devices.filter((device) => device.temperature < 0);
    }
}
