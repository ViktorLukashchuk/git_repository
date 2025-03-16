import { Locator, Page } from 'puppeteer';

export class BrickLinkPage {
    private get searchInput(): Locator<Element> {
        return this.page.locator('input.blp-adv-search__input[placeholder="Search..."]');
    }

    private get searchButton(): Locator<Element> {
        return this.page.locator('button.blp-btn.blp-adv-search__submit');
    }

    private get setElement(): Locator<Element> {
        return this.page.locator(this.setSelector);
    }

    private setSelector = 'div[style="background-color: #eeeeee; padding: 10px; margin: 5px; font-size: 12px;"]';

    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.bricklink.com/v2/main.page');
        await this.searchInput.wait();
    }
    public async acceptCookie(): Promise<void> {
        const acceptButtons = await this.page.$$('button.btn.btn--cta.text--bold.cookie-notice__btn');
        await acceptButtons[1].click();
    }

    public async fillSearchInput(value: string): Promise<void> {
        await this.searchInput.fill(value);
    }

    public async clickSearchButton(): Promise<void> {
        await this.searchButton.click();
    }

    public async waitForSearchResults(): Promise<void> {
        await this.setElement.wait();
    }

    public async getSearchResult(): Promise<string | null> {
        const inputElement = await this.page.$(this.setSelector);
        if (inputElement) {
            const placeholderValue = await this.page.evaluate((el) => el.textContent, inputElement);
            return placeholderValue || null;
        }
        return null;
    }
}
