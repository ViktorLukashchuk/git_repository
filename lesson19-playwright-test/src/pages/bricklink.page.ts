import { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { BricklinkFooterElement } from 'src/elements/bricklink-footer';
import { BricklinHeaderElement } from 'src/elements/bricklink-header';
import { FeaturedItemsSection } from 'src/elements/featured-items-section';

export class BricklinkPage {
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

    private resultSelector = '#_idInKeyword';

    private get itemNameLocator(): Locator {
        return this.page.locator('#item-name-title');
    }

    private get itemDescriptionLocator(): Locator {
        return this.page.locator('#_idItemDescription');
    }
    private get allSetsLinkLocator(): Locator {
        return this.page.locator('//input[@value="See All Sets"]').nth(1);
    }
    private get bulldozerLinkLocator(): Locator {
        return this.page.locator('a').filter({ hasText: 'Motorized Bulldozer' }).nth(0);
    }

    public constructor(private page: Page) {}
    public async goTo(): Promise<void> {
        await this.page.goto('https://www.bricklink.com/v2/main.page');
        await this.mainPageState.waitFor();
    }
    public async cookieButtonClick(): Promise<void> {
        await this.cookieButton.click();
    }
    public async search(setNumber: string): Promise<void> {
        await this.searchInput.fill(setNumber);
        await this.searchButton.click();
    }

    public async verifySearchResult(setNumber: string): Promise<void> {
        await expect(this.page.locator(this.resultSelector)).toHaveValue(setNumber);
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
    public headerElement = new BricklinHeaderElement(this.page.locator('.blp-header__content'));
    public footerElement = new BricklinkFooterElement(this.page.locator('.blp-footer'));
    public featuredItems = new FeaturedItemsSection(this.page.locator('#trending-items-container > section'));
}
