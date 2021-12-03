import { Selector } from 'testcafe';

export default class Footer {
    public container = Selector('footer');
    public footerItemsWithInternalLinks = this.container.find('a[href^="/"]');
    public footerItemsWithExternalLinks = this.container.find('li [href^="https"]');
}