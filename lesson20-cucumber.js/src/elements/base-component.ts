import { expect, Locator } from '@playwright/test';

export class BaseElement {
    protected readonly baseLocator: Locator;

    public constructor(baseLocator: Locator) {
        this.baseLocator = baseLocator;
    }

    public async getTextContentList(locator: Locator): Promise<string[]> {
        const elements = await locator.all();
        const texts: string[] = [];

        for (const element of elements) {
            const text = await element.textContent();
            if (text) {
                texts.push(text.trim());
            }
        }

        return texts;
    }

    public async verifyContentList(locator: Locator, expectedItems: string[]): Promise<void> {
        const actualItems = await this.getTextContentList(locator);
        const expectedItem = expectedItems[Math.floor(Math.random() * expectedItems.length)];
        await expect(actualItems).toContain(expectedItem);
    }
}
