import DocumentBoard from './objects/docBoard';
import Header from './objects/header';
import Sidebar from './objects/sidebar';
import WelcomeBoard from './objects/welcomeBoard';
import Footer from './objects/footer';
import Search from './objects/search';

class App {
    public header = new Header();
    public welcomeBoard = new WelcomeBoard();
    public docBoard = new DocumentBoard();
    public sidebar = new Sidebar();
    public footer = new Footer();
    public search = new Search();
}

export default new App();