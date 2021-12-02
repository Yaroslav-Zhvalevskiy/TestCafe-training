import DocumentBoard from './objects/docBoard';
import Header from './objects/header';
import WelcomeBoard from './objects/welcomeBoard';

class App {
    public header = new Header();
    public welcomeBoard = new WelcomeBoard();
    public docBoard = new DocumentBoard();
}

export default new App();