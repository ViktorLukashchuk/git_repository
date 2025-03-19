import { $, browser, expect } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class BricklinkPage {
    private get searchInput(): ChainablePromiseElement {
        return $('input.blp-adv-search__input[placeholder="Search..."]');
    }

    private get searchButton(): ChainablePromiseElement {
        return $('button.blp-btn.blp-adv-search__submit');
    }

    private resultSelector = '#_idInKeyword';

    public async goto(): Promise<void> {
        await browser.url('https://www.bricklink.com/v2/main.page');
        await browser.maximizeWindow();
    }

    public async setSearch(setNumber: string): Promise<void> {
        await this.searchInput.setValue(setNumber);
        await this.searchButton.click();
        await expect($(this.resultSelector)).toHaveValue(setNumber);
    }
}
