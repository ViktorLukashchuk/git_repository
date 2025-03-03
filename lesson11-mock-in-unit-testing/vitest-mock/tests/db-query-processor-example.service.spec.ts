import { DbQueryProcessorExampleService } from 'src/db-query-processor-example.service.ts';
import { DbConnectionExample } from '../src/db-connection-example';
import { beforeEach, describe, expect, Mocked, test, vi } from 'vitest';
import { CoolingDevice } from 'src/cooling-device';

describe('DbQueryProcessorExampleService Unit Tests', () => {
    let mockedDbConnection: Mocked<DbConnectionExample>;
    let service: DbQueryProcessorExampleService;

    const batteryExpectedResult = [
        {
            name: 'Cooler',
            energySource: 'battery',
            temperature: 4,
            height: 70,
            width: 30,
            depth: 30
        }
    ] as CoolingDevice[];

    const freezerExpectedResult = [
        {
            name: 'Freezer',
            energySource: 'electricity',
            temperature: -2,
            height: 120,
            width: 40,
            depth: 40
        }
    ] as CoolingDevice[];

    const expectedResult = [
        {
            name: 'Freezer',
            energySource: 'electricity',
            temperature: -2,
            height: 120,
            width: 40,
            depth: 40
        },
        {
            name: 'Fridge',
            energySource: 'electricity',
            temperature: 6,
            height: 190,
            width: 45,
            depth: 45
        },
        {
            name: 'Cooler',
            energySource: 'battery',
            temperature: 4,
            height: 70,
            width: 30,
            depth: 30
        }
    ] as CoolingDevice[];

    beforeEach(() => {
        mockedDbConnection = {
            findHigherThen: vi.fn(),
            findWiderThen: vi.fn(),
            batteryDevice: vi.fn(),
            freezerDevice: vi.fn()
        } as unknown as Mocked<DbConnectionExample>;

        mockedDbConnection.findHigherThen.mockRestore();
        mockedDbConnection.findWiderThen.mockRestore();
        mockedDbConnection.batteryDevice.mockRestore();
        mockedDbConnection.freezerDevice.mockRestore();

        service = new DbQueryProcessorExampleService(mockedDbConnection);
    });

    describe('freezerExpectedResult return data', () => {
        test('freezerExpectedResult data should be as expected', () => {
            mockedDbConnection.freezerDevice.mockReturnValue(freezerExpectedResult);

            const resultOne = service.freezerDevice();
            expect(resultOne).toEqual(freezerExpectedResult);
            expect(mockedDbConnection.freezerDevice).toHaveBeenCalledTimes(1);
        });
    });

    describe('batteryExpectedResult return data', () => {
        test('batteryExpectedResult data should be as expected', () => {
            mockedDbConnection.batteryDevice.mockReturnValue(batteryExpectedResult);

            const resultOne = service.batteryDevice();
            expect(resultOne).toEqual(batteryExpectedResult);
            expect(mockedDbConnection.batteryDevice).toHaveBeenCalledWith();
            expect(mockedDbConnection.batteryDevice).toHaveBeenCalledTimes(1);
        });
    });

    describe('findHigherThen return data', () => {
        test('with height 110 data should be as expected', () => {
            mockedDbConnection.findHigherThen.mockReturnValue(expectedResult);

            const result = service.findHigherThen(60);
            expect(result).toEqual(expectedResult);
            expect(mockedDbConnection.findHigherThen).toHaveBeenCalledWith(60);
            expect(mockedDbConnection.findHigherThen).toHaveBeenCalledTimes(1);
        });
    });

    describe('findHigherThen return throws error then age is less then 0', () => {
        test('height is 0', () => {
            mockedDbConnection.findHigherThen.mockReturnValue(expectedResult);
            expect(() => service.findHigherThen(0)).toThrowError();
            expect(mockedDbConnection.findHigherThen).toHaveBeenCalledTimes(0);
        });
    });

    describe('findHigherThen return data', () => {
        test('with height 110 data should be as expected', () => {
            mockedDbConnection.findWiderThen.mockReturnValue(expectedResult);

            const result = service.findWiderThen(20);
            expect(result).toEqual(expectedResult);
            expect(mockedDbConnection.findWiderThen).toHaveBeenCalledWith(20);
            expect(mockedDbConnection.findWiderThen).toHaveBeenCalledTimes(1);
        });
    });

    describe('findWiderThen return throws error then width is less then 0', () => {
        test('width is 0', () => {
            mockedDbConnection.findWiderThen.mockReturnValue(expectedResult);
            expect(() => service.findWiderThen(0)).toThrowError();
            expect(mockedDbConnection.findWiderThen).toHaveBeenCalledTimes(0);
        });
    });
});
