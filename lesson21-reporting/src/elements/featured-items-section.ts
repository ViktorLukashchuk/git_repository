import { Locator } from '@playwright/test';

export class FeaturedItemsSection {
    private get buttons(): Locator {
        return this.baseLocator.locator('div.bl-btn-view-switch button');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async getAllButtons(): Promise<{ name: string; isActive: boolean; click: () => Promise<void> }[]> {
        const buttonLocators = await this.buttons.all();

        return Promise.all(
            buttonLocators.map(async (button) => {
                const name = (await button.getAttribute('value')) || '';
                const classList = (await button.getAttribute('class')) || '';
                const isActive = classList.includes('active');

                return {
                    name,
                    isActive,
                    click: () => button.click()
                };
            })
        );
    }
}
