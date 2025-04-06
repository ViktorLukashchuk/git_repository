import { Locator } from '@playwright/test';

export class FeaturedItemsSection {
    private get buttonsSelector(): Locator {
        return this.baseLocator.locator('div.bl-btn-view-switch button');
    }
    public constructor(private readonly baseLocator: Locator) {}

    public async getButtonSelectors(): Promise<string[]> {
        const buttons = await this.buttonsSelector.all();

        const buttonSelectors = await Promise.all(
            buttons.map(async (button) => {
                const value = await button.getAttribute('value');
                return `button[value="${value}"]`;
            })
        );

        return buttonSelectors;
    }
}
