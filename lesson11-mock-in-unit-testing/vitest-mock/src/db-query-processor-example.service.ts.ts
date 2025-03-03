import { DbConnectionExample } from './db-connection-example';
import { CoolingDevice } from './cooling-device';

export class DbQueryProcessorExampleService {
    private _dbConnection: DbConnectionExample;

    public constructor(dbConnection: DbConnectionExample) {
        this._dbConnection = dbConnection;
    }

    public findHigherThen(height: number): CoolingDevice[] {
        if (height <= 0) {
            throw new Error('height cannot be less then 0');
        }

        const res = this._dbConnection.findHigherThen(height).filter((device) => device.height > height);
        return res;
    }

    public findWiderThen(width: number): CoolingDevice[] {
        if (width <= 0) {
            throw new Error('width cannot be less then 0');
        }
        const res = this._dbConnection.findWiderThen(width).filter((device) => device.width > width);
        return res;
    }

    public batteryDevice(): CoolingDevice[] {
        const res = this._dbConnection.batteryDevice().filter((device) => device.energySource == 'battery');
        return res;
    }

    public freezerDevice(): CoolingDevice[] {
        const res = this._dbConnection.freezerDevice().filter((device) => device.temperature < 0);
        return res;
    }
}
