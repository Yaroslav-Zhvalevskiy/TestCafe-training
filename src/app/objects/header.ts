import { Selector } from 'testcafe';

export default class Header {
    public container = Selector('#header');
    public menuItems = this.container.find('nav li');
    public logos = this.container.find('.logo svg');
}