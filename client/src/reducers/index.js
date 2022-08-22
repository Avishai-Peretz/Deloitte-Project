import { combineReducers } from "redux";
import { searchResult, employees, autocomplete } from './employees';

export default combineReducers({ employees, searchResult, autocomplete });