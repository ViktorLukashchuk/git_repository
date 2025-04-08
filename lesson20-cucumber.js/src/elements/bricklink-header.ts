import { Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class BricklinHeaderElement {
    private get headerItemsSelector(): Locator {
        return this.baseLocator.locator('ul li.blp-nav__main-item button span');
    }
    public constructor(private readonly baseLocator: Locator) {}

    public async getHeaderElements(): Promise<string[]> {
        const headerElements = await this.headerItemsSelector.all();
        const headerItems = [];

        for (const element of headerElements) {
            const text = await element.textContent();
            if (text) {
                headerItems.push(text.trim());
            }
        }
        return headerItems;
    }

    public async verifyHeaders(headerMenuItems: string[]): Promise<void> {
        const headerItems = await this.getHeaderElements();
        const headerMenuItem = headerMenuItems[Math.floor(Math.random() * headerMenuItems.length)];
        await expect(headerItems).toContain(headerMenuItem);
    }
}
