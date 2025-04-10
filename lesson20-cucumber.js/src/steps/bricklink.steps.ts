import { Then, When } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { testData } from '../test-data/test-data.ts';
import { expect } from '@playwright/test';

When('user clicks on cookie button', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.clickCookieButton();
});

When('user input {string} search combination in search bar', async function (this: RobotDreamsWorld, setId: string) {
    await this.bricklinkPage.search(setId);
});

Then('user is redirected to results page for {string} set', async function (this: RobotDreamsWorld, setId: string) {
    await this.bricklinkPage.verifySearchResult(setId);
});

When('user go to All Sets tab', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.goToAllSets();
});

When('user press on set {string} link', async function (this: RobotDreamsWorld, setId: string) {
    await this.bricklinkPage.goToSetLink(setId);
});

Then('user redirected to set page', async function (this: RobotDreamsWorld) {
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
