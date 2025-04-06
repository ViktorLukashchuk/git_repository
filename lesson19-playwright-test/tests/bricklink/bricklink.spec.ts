import test, { expect } from '@playwright/test';
import { BricklinkPage } from '../../src/pages/bricklink.page';

import { testData } from 'src/test-data/test-data';

test.describe('Bricklink actions', () => {
    let bricklinkPage: BricklinkPage;

    test.beforeEach(async ({ page }) => {
        bricklinkPage = new BricklinkPage(page);
        await bricklinkPage.goTo();
        await bricklinkPage.cookieButtonClick();
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

    test('should toggle active class on button click using loop', async ({ page }) => {
        const buttonSelectors = await bricklinkPage.featuredItems.getButtonSelectors();
        const buttons = buttonSelectors.map((selector) => page.locator(selector));
        await expect(buttons[0]).toHaveClass(/active/);
        for (let i = 0; i < buttons.length; i++) {
            await buttons[i].click();
            await expect(buttons[i]).toHaveClass(/active/);
            for (let j = 0; j < buttons.length; j++) {
                if (i !== j) {
                    await expect(buttons[j]).not.toHaveClass(/active/);
                }
            }
        }
    });
});
