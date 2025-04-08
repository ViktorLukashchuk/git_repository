import { Given } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { BricklinkPage } from '../pages/bricklink.page.ts';

Given('the user is on the Bricklink homepage', async function (this: RobotDreamsWorld) {
    const bricklinkPage = new BricklinkPage(this.page);
    await bricklinkPage.goTo();
});
