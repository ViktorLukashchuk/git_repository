import { Given } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';

Given('the user is on the Bricklink homepage', async function (this: RobotDreamsWorld) {
    await this.bricklinkPage.goTo();
});
