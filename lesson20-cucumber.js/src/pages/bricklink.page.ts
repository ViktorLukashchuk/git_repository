import { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { BricklinkFooterElement } from '../elements/bricklink-footer.ts';
import { BricklinHeaderElement } from '../elements/bricklink-header.ts';
import { FeaturedItemsSection } from '../elements/featured-items-section.ts';

export class BricklinkPage {
    public headerElement: BricklinHeaderElement;
    public footerElement: BricklinkFooterElement;
    public featuredItems: FeaturedItemsSection;

    private get mainPageState(): Locator {
        return this.page.locator("(//h2[@class='bl-title']/a)[1]");
    }

    private get cookieButton(): Locator {
        return this.page.locator('button.btn.btn--cta.text--bold.cookie-notice__btn').nth(1);
    }

    private get searchInput(): Locator {
        return this.page.locator('input[placeholder="Search..."]');
    }

    private get searchButton(): Locator {
        return this.page.locator('button[type="submit"]');
    }

    private get resultSelector(): Locator {
        return this.page.locator('#_idInKeyword');
    }

    private get itemNameLocator(): Locator {
        return this.page.locator('#item-name-title');
    }

    private get itemDescriptionLocator(): Locator {
        return this.page.locator('#_idItemDescription');
    }

    private get allSetsLinkLocator(): Locator {
        return this.page.locator('//input[@value="See All Sets"]').nth(1);
    }

    public constructor(private page: Page) {
        this.headerElement = new BricklinHeaderElement(this.page.locator('.blp-header__content'));
        this.footerElement = new BricklinkFooterElement(this.page.locator('.blp-footer'));
        this.featuredItems = new FeaturedItemsSection(this.page.locator('#trending-items-container > section'));
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.bricklink.com/v2/main.page');
        await this.mainPageState.waitFor();
    }

    public async clickCookieButton(): Promise<void> {
        await this.cookieButton.click();
    }

    public async search(setNumber: string): Promise<void> {
        await this.searchInput.fill(setNumber);
        await this.searchButton.click();
    }

    public async verifySearchResult(setNumber: string): Promise<void> {
        await expect(this.resultSelector).toHaveValue(setNumber);
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

    public async goToSetLink(setNumber: string): Promise<void> {
        const locator = this.page.locator(`//span[contains(@class, "pspItemCateAndNo") and contains(text(), "${setNumber}")]`).first();
        await locator.click();
    }

    public async verifyItemSet(setNumber: string): Promise<void> {
        const locator = this.page.locator(`//span[contains(text(), "${setNumber}")]`);
        await expect(locator).toHaveText(setNumber);
    }
}
