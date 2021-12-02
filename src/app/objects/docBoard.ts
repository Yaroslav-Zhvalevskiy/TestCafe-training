import { Selector } from 'testcafe';

export default class DocumentBoard {
    public container = Selector('.content');
    public title = this.container.find('div>h1');
}