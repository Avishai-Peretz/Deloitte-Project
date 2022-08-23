import { combineReducers } from "redux";
import { searchResult, employees, autocomplete, autocompleteKey } from './reducer';

export default combineReducers({ employees, searchResult, autocomplete, autocompleteKey });
