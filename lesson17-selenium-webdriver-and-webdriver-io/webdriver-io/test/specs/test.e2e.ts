import { $, $$, browser } from '@wdio/globals';
import { expect } from 'expect-webdriverio';
import { BricklinkPage } from '../../src/pages/bricklink.page';

describe('Bricklink actions', () => {
    let bricklinkPage: BricklinkPage;
    const someSet = '8421';
    beforeEach(async () => {
        bricklinkPage = new BricklinkPage();
        bricklinkPage.goto();
    });

    it('should find 8275 set', async () => {
        await $$('button.btn.btn--cta.text--bold.cookie-notice__btn')[1].click();
        await $('input.blp-adv-search__input[placeholder="Search..."]').setValue('8275');
        await $('button.blp-btn.blp-adv-search__submit').click();
        const resultSelector = '#_idInKeyword';
        await expect($(resultSelector)).toHaveValue('8275');

        const bulldozerLink = await $('a=Motorized Bulldozer');
        await browser.execute('arguments[0].click();', bulldozerLink);
        await expect($('#item-name-title')).toHaveText('Motorized Bulldozer');
        await expect($('#_idItemDescription')).toHaveText('Requires 6 AA (1.5V) and 3 AAA (1.5V) batteries, not included.');
    });

    it('Main page header contains menu "BrickLink Designer Program"', async () => {
        const headerItemsSelector = 'ul li.blp-nav__main-item button span';
        const headerElements = await $$(headerItemsSelector);
        const headerItems = [];

        for (const element of headerElements) {
            const text = await element.getText();
            headerItems.push(text.trim());
        }

        expect(headerItems).toContain('BrickLink Designer Program');
    });

    it('should find some set with POM', async () => {
        await bricklinkPage.setSearch(someSet);
    });
});
