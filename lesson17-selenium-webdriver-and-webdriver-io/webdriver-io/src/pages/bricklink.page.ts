import { $, $$, browser, expect } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class BricklinkPage {
    private get mainPageState(): ChainablePromiseElement {
        return $("(//h2[@class='bl-title']/a)[1]");
    }
    private get cookieButton(): ChainablePromiseElement {
        return $$('button.btn.btn--cta.text--bold.cookie-notice__btn')[1];
    }

    private get searchInput(): ChainablePromiseElement {
        return $('input[placeholder="Search..."]');
    }

    private get searchButton(): ChainablePromiseElement {
        return $('button[type="submit"]');
    }

    private resultSelector = '#_idInKeyword';
    private headerItemsSelector = 'ul li.blp-nav__main-item button span';

    private get itemNameLocator(): ChainablePromiseElement {
        return $('#item-name-title');
    }

    private get itemDescriptionLocator(): ChainablePromiseElement {
        return $('#_idItemDescription');
    }
    private get allSetsLinkLocator(): ChainablePromiseElement {
        return $$('//input[@value="See All Sets"]')[1];
    }

    private get bulldozerLinkLocator(): ChainablePromiseElement {
        return $$('a=Motorized Bulldozer')[0];
    }

    public async goto(): Promise<void> {
        await browser.url('https://www.bricklink.com/v2/main.page');
        await browser.maximizeWindow();
        await this.mainPageState.waitForStable();
    }
    public async cookieButtonClick(): Promise<void> {
        await this.cookieButton.click();
    }
    public async search(setNumber: string): Promise<void> {
        await this.searchInput.setValue(setNumber);
        await this.searchButton.click();
    }

    public async verifySearchResult(setNumber: string): Promise<void> {
        await expect($(this.resultSelector)).toHaveValue(setNumber);
    }
    public async verifyItemName(itemName: string): Promise<void> {
        await expect(this.itemNameLocator).toHaveText(itemName);
    }

    public async verifyItemDescription(itemDescription: string): Promise<void> {
        await expect(this.itemDescriptionLocator).toHaveText(itemDescription);
    }

    public async goToAllSets(): Promise<void> {
        await this.allSetsLinkLocator.click();
    }
    public async goToBulldozerLink(): Promise<void> {
        await this.bulldozerLinkLocator.click();
    }

    public async headerElementsGet(): Promise<string[]> {
        const headerElements = await $$(this.headerItemsSelector);
        const headerItems = [];

        for (const element of headerElements) {
            const text = await element.getText();
            headerItems.push(text.trim());
        }
        return headerItems;
    }

    public async verifyHeaders(): Promise<void> {
        const headerItems = await this.headerElementsGet();
        await expect(headerItems).toContain('BrickLink Designer Program');
    }
}
