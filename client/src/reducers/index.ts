// import { combineReducers } from "redux";
import { searchResult, employees, autocomplete, autocompleteKey, searchTerms } from './reducer';
import type { Reducer } from '@reduxjs/toolkit'

const reducers : Reducer<{}> | any = { searchResult, employees, autocomplete, autocompleteKey, searchTerms }
export type RootState = ReturnType<typeof reducers>
export default reducers

// export default combineReducers({ employees, searchResult, autocomplete, autocompleteKey, searchTerms });
