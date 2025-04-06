import { Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class BricklinkFooterElement {
    private get footerItemsSelector(): Locator {
        return this.baseLocator.locator('.blp-footer-column--bricklink.blp-footer-column--bricklink .blp-footer-column__item');
    }
    public constructor(private readonly baseLocator: Locator) {}

    public async footerElementsGet(): Promise<string[]> {
        const footerElements = await this.footerItemsSelector.all();
        const footerItems = [];

        for (const element of footerElements) {
            const text = await element.textContent();
            if (text) {
                footerItems.push(text.trim());
            }
        }
        return footerItems;
    }

    public async verifyFooters(footerMenuItems: string[]): Promise<void> {
        const footerItems = await this.footerElementsGet();
        const footerMenuItem = footerMenuItems[Math.floor(Math.random() * footerMenuItems.length)];
        await expect(footerItems).toContain(footerMenuItem);
    }
}
