import { combineReducers } from "redux";
import { searchResult, employees, autocompleteClick, autocompleteHover, searchValue } from './employees';

export default combineReducers({ employees, searchResult, autocompleteClick, autocompleteHover, searchValue });