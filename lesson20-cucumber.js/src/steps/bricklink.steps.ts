import { Then, When } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { testData } from '../test-data/test-data.ts';
import { expect } from '@playwright/test';

When('user clicks on cookie button', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.clickCookieButton();
});

When('user input 8275 search combination in search bar', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.search(testData.setNumber);
});

Then('user is redirected to results page for 8275 set', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.verifySearchResult(testData.setNumber);
});

When('user go to All Sets tab', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.goToAllSets();
});

When('user press on 8275 set link', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.goToBulldozerLink();
});

Then('user redirected to set 8275 page', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.verifyItemName(testData.setName);
    await this.bricklinkPage.verifyItemDescription(testData.setDescription);
});

Then('user is able to verify page header', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.headerElement.verifyHeaders(testData.headerMenuItems);
});

Then('user is able to verify page footer', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.footerElement.verifyFooters(testData.footerMenuItems);
});

Then('user is able to verify carousel buttons on main page', async function (this: RobotDreamsWorld) {
    const buttons = await this.bricklinkPage.featuredItems.getAllButtons();

    for (const button of buttons) {
        await button.click();

        const currentButtons = await this.bricklinkPage.featuredItems.getAllButtons();

        expect(currentButtons.find((x) => x.name === button.name)?.isActive).toBe(true);
        expect(currentButtons.filter((x) => x.name !== button.name).every((x) => !x.isActive)).toBe(true);
    }
});
