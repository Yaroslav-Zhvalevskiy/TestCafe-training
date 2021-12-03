import { Selector } from 'testcafe';

export default class Search {
    public searchField = Selector('.DocSearch');
    public searchInputField = Selector('.DocSearch [placeholder="Search docs"]');
    public searchResults = Selector('.DocSearch-Dropdown');
}