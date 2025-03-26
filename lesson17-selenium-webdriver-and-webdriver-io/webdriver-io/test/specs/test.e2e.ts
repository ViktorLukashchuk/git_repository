import { BricklinkPage } from '../../src/pages/bricklink.page';

describe('Bricklink actions', () => {
    let bricklinkPage: BricklinkPage;
    const set = {
        number: '8275',
        name: 'Motorized Bulldozer',
        description: 'Requires 6 AA (1.5V) and 3 AAA (1.5V) batteries, not included.'
    };

    beforeEach(async () => {
        bricklinkPage = new BricklinkPage();
        bricklinkPage.goto();
    });

    it('should find 8275 set', async () => {
        await bricklinkPage.cookieButtonClick();
        await bricklinkPage.search(set.number);
        await bricklinkPage.verifySearchResult(set.number);
        await bricklinkPage.goToAllSets();
        await bricklinkPage.goToBulldozerLink();
        await bricklinkPage.verifyItemName(set.name);
        await bricklinkPage.verifyItemDescription(set.description);
    });

    it('Main page header contains menu "BrickLink Designer Program"', async () => {
        await bricklinkPage.verifyHeaders();
    });
});
