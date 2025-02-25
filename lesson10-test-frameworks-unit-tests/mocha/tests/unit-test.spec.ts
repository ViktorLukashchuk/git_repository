import { expect } from 'chai';

import { Fridge } from '../src/fridge';
import { Cooler } from 'src/cooler';
import { Freezer } from 'src/freezer';

describe('Unit test suite', () => {
    it('Fridge should freeze the water if we ask to', () => {
        // Arrange
        const fridgeTest = new Fridge(4, '45x50x150');

        // Act
        fridgeTest.freezeWater();

        // Assert
        expect(fridgeTest.getTemperature).to.be.equal(0);
    });

    it('Fridge should cool the water if we ask to', () => {
        // Arrange
        const fridgeTest = new Fridge(6, '45x50x150');

        // Act
        fridgeTest.coolWater(2);

        // Assert
        expect(fridgeTest.getTemperature).to.be.equal(2);
    });

    it('Cooler should NOT freeze the water', () => {
        // Arrange
        const coolerTest = new Cooler(3, '25x25x50');

        // Act
        coolerTest.freezeWater();

        // Assert
        expect(coolerTest.getTemperature).to.be.equal(3);
    });

    it('Cooler should cool the water if we ask to', () => {
        // Arrange
        const coolerTest = new Cooler(3, '25x25x50');

        // Act
        coolerTest.coolWater(2);

        // Assert
        expect(coolerTest.getTemperature).to.be.equal(2);
    });

    it('Freezer should freeze the water if we ask to', () => {
        // Arrange
        const freezerTest = new Freezer(2, '25x25x50');

        // Act
        freezerTest.freezeWater();

        // Assert
        expect(freezerTest.getTemperature).to.be.equal(0);
    });

    it('Freezer should have super freeze option', () => {
        // Arrange
        const freezerTest = new Freezer(2, '25x25x50');

        // Act
        freezerTest.superFreeze();

        // Assert
        expect(freezerTest.getTemperature).to.be.equal(-20);
    });

    it('Freezer should have appropriate dimensions set', () => {
        // Arrange
        const freezerTest = new Freezer(2, '25x25x25');

        // Assert
        expect(freezerTest.height).to.be.equal(25);
        expect(freezerTest.width).to.be.equal(25);
        expect(freezerTest.depth).to.be.equal(25);
    });
});
