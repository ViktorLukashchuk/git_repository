import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { BricklinkPage } from '../pages/bricklink.page.ts';

export class RobotDreamsWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown>();
    public scenarioContext: Map<string, unknown>; // we can create a context class that will have its set and get methods for better readability

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    public get browser(): Browser {
        return RobotDreamsWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return RobotDreamsWorld.globalContext;
    }

    // pages getters
    public get bricklinkPage(): BricklinkPage {
        if (!this._bricklinkPage) {
            this._bricklinkPage = new BricklinkPage(this.page);
        }
        return this._bricklinkPage;
    }

    // pages
    private _bricklinkPage: BricklinkPage;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
