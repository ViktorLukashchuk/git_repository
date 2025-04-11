import { Locator } from '@playwright/test';
import { BaseElement } from './base-component.ts';

export class BricklinkFooterElement extends BaseElement {
    private get footerItemsSelector(): Locator {
        return this.baseLocator.locator('.blp-footer-column--bricklink.blp-footer-column--bricklink .blp-footer-column__item');
    }

    public constructor(baseLocator: Locator) {
        super(baseLocator);
    }

    public async getFooterItems(): Promise<string[]> {
        return await this.getTextContentList(this.footerItemsSelector);
    }

    public async verifyFooters(footerMenuItems: string[]): Promise<void> {
        await this.verifyContentList(this.footerItemsSelector, footerMenuItems);
    }
}
