import { combineReducers } from "redux";
import {searchResult, employees} from './employees';

export default combineReducers({ employees, searchResult });