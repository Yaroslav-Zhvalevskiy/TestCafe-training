import { Selector } from 'testcafe';

export default class Sidebar {
    public container = Selector('.sidebar');
    public sidebarItems = this.container.find('a');
}