import { combineReducers } from "redux";
import { searchResult, employees, autocomplete, autocompleteKey, searchTerms } from './reducer';

export default combineReducers({ employees, searchResult, autocomplete, autocompleteKey, searchTerms });
