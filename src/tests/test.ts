import { Selector } from 'testcafe';
import app from '../app/app';

fixture(`UI. Getting Started`)
    .page(`http://testcafe.io/`)

test('My first test', async t => {
    await t.expect(await app.welcomeBoard.welcomeMessage.textContent).eql('End-to-end testing, simplified');
    await t.expect(await app.header.menuItems.count).eql(7);
    await t.click(app.header.menuItems.withText('Docs'));
    await t.expect(await app.docBoard.title.textContent).eql('Getting Started');
});