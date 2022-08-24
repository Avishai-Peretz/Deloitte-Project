import { combineReducers } from "redux";
import { searchResult, employees, autocomplete, autocompleteKey, searchField } from './reducer';

export default combineReducers({ employees, searchResult, autocomplete, autocompleteKey, searchField });
