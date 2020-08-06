/*
 src/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({ simpleReducer, moviesReducer });
