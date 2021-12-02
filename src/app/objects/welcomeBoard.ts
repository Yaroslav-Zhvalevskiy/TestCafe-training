import { Selector } from 'testcafe';

export default class WelcomeBoard {
    public container = Selector('.main-page');
    public welcomeMessage = this.container.find('.hero-content>h1');
}