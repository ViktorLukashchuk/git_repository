import { Locator } from '@playwright/test';
import { BaseElement } from './base-component.ts';

export class BricklinHeaderElement extends BaseElement {
    private get headerItemsSelector(): Locator {
        return this.baseLocator.locator('ul li.blp-nav__main-item button span');
    }

    public constructor(baseLocator: Locator) {
        super(baseLocator);
    }

    public async getHeaderItems(): Promise<string[]> {
        return await this.getTextContentList(this.headerItemsSelector);
    }

    public async verifyHeaders(headerMenuItems: string[]): Promise<void> {
        await this.verifyContentList(this.headerItemsSelector, headerMenuItems);
    }
}
