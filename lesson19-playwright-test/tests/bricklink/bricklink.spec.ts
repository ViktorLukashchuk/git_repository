import test, { expect } from '@playwright/test';
import { BricklinkPage } from '../../src/pages/bricklink.page';

import { testData } from 'src/test-data/test-data';

test.describe('Bricklink actions', () => {
    let bricklinkPage: BricklinkPage;

    test.beforeEach(async ({ page }) => {
        bricklinkPage = new BricklinkPage(page);
        await bricklinkPage.goTo();
        await bricklinkPage.clickCookieButton();
    });

    test('Main page header contains one of the menu from test data', async () => {
        await bricklinkPage.headerElement.verifyHeaders(testData.headerMenuItems);
    });

    test('Main page footer contains one of the menu from test data', async () => {
        await bricklinkPage.footerElement.verifyFooters(testData.footerMenuItems);
    });
    test('should find 8275 set', async () => {
        await bricklinkPage.search(testData.setNumber);
        await bricklinkPage.verifySearchResult(testData.setNumber);
        await bricklinkPage.goToAllSets();
        await bricklinkPage.goToBulldozerLink();
        await bricklinkPage.verifyItemName(testData.setName);
        await bricklinkPage.verifyItemDescription(testData.setDescription);
        await bricklinkPage.headerElement.verifyHeaders(testData.headerMenuItems);
        await bricklinkPage.footerElement.verifyFooters(testData.footerMenuItems);
    });

    test('should toggle active class on button click using loop', async () => {
        const buttons = await bricklinkPage.featuredItems.getAllButtons();

        for (const button of buttons) {
            await button.click();

            const currentButtons = await bricklinkPage.featuredItems.getAllButtons();

            expect(currentButtons.find((x) => x.name === button.name)?.isActive).toBe(true);
            expect(currentButtons.filter((x) => x.name !== button.name).every((x) => !x.isActive)).toBe(true);
        }
    });
});
