import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { BrickLinkPage } from 'src/pom/bricklink.page';

describe('Puppeteer Bricklink tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let brickLinkPage: BrickLinkPage;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        brickLinkPage = new BrickLinkPage(page);
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('should find 8275 set', async () => {
        await page.goto('https://www.bricklink.com/v2/main.page', { waitUntil: 'domcontentloaded' });
        const acceptButtons = await page.$$('button.btn.btn--cta.text--bold.cookie-notice__btn');
        if (acceptButtons.length > 1) {
            await acceptButtons[1].click();
        }
        const inputSelector = 'input.blp-adv-search__input[placeholder="Search..."]';
        await page.waitForSelector(inputSelector);
        await page.type(inputSelector, '8275');
        await page.locator('button.blp-btn.blp-adv-search__submit').click();

        const setSelector = 'div[style="background-color: #eeeeee; padding: 10px; margin: 5px; font-size: 12px;"]';
        await page.waitForSelector(setSelector);
        const inputElement = await page.$(setSelector);

        if (inputElement) {
            const placeholderValue = await page.evaluate((el) => el.textContent, inputElement);
            expect(placeholderValue).contains('All Item Search: Results for "8275"');
        }
    });

    it('should find 8275 set with POM', async () => {
        await brickLinkPage.goTo();
        await brickLinkPage.acceptCookie();
        await brickLinkPage.fillSearchInput('8275');
        await brickLinkPage.clickSearchButton();
        await brickLinkPage.waitForSearchResults();
        const result = await brickLinkPage.getSearchResult();
        expect(result).contains('All Item Search: Results for "8275"');
    });
});
