import { combineReducers } from "redux";
import { searchResult, employees, autocompleteClick, autocompleteHover } from './employees';

export default combineReducers({ employees, searchResult, autocompleteClick, autocompleteHover });