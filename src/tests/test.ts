import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import app from '../app/app';

fixture(`UI. Getting Started`)
    .page(`https://testcafe.io/`)
    .beforeEach(async t => {
        await t
            .maximizeWindow()
    });

const getPageUrl = ClientFunction(() => window.location.href);

test('Test home page', async t => {
    await t.expect(await app.welcomeBoard.welcomeMessage.textContent).eql('End-to-end testing, simplified');
    await t.click(app.header.logos.nth(0));
    await t.expect(getPageUrl()).eql('https://testcafe.io/');
    await t.click(app.header.logos.nth(1));
    await t.expect(getPageUrl()).eql('https://testcafe.io/');
});

test('Test search', async t => {
    await t.click(app.search.searchField);
    await t.typeText(app.search.searchInputField, 'Test');
    await t.pressKey('enter');
    await t.expect(await app.docBoard.title.textContent).contains('TestCafe');
    await t.pressKey('ctrl+k');
    await t.expect(app.search.searchResults.exists).ok();
    await t.pressKey('esc');
    await t.expect(app.search.searchResults.exists).notOk();
});

test('Test header', async t => {
    await t.expect(await app.header.menuItems.count).eql(7);
    await t.click(app.header.menuItems.withText('FAQ'));
    await t.expect(await app.docBoard.title.textContent).eql('FAQ');
    await t.click(app.header.menuItems.withText('Release Notes'));
    await t.expect(await app.docBoard.title.textContent).eql('TestCafe Release Notes');
    await t.click(app.header.menuItems.withText('Docs'));
    await t.expect(await app.docBoard.title.textContent).eql('Getting Started');
});

test('Test sidebar', async t => {
    await t.click(app.header.menuItems.withText('Docs'));
    await t.click(app.header.menuItems.withText('Guides'));
    await t.click(app.sidebar.sidebarItems.withText('Run Tests'));
    await t.expect(await app.docBoard.title.textContent).eql('Run Tests');
    await t.click(app.sidebar.sidebarItems.withText('TypeScript and CoffeeScript'));
    await t.expect(await app.docBoard.title.textContent).eql('TypeScript and CoffeeScript');

    await t.click(app.header.menuItems.withText('Reference'));
    await t.expect(await app.docBoard.title.textContent).eql('Reference');
    await t.click(app.sidebar.sidebarItems.withText('Global Functions'));
    await t.click(app.sidebar.sidebarItems.withText('test()'));
    await t.expect(await app.docBoard.title.textContent).eql('test Function');
});

test('Test footer', async t => {
    await t.scrollIntoView(app.footer.footerItemsWithInternalLinks);
    await t.click(app.footer.footerItemsWithInternalLinks.nth(6));
    await t.expect(await app.docBoard.title.textContent).eql('Books');
    await t.scrollIntoView(app.footer.footerItemsWithExternalLinks);
    await t.click(app.footer.footerItemsWithExternalLinks.nth(0));
    await t.expect(getPageUrl()).eql('https://www.devexpress.com/products/testcafestudio/');
});