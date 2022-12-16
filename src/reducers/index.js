'use strict'

import { combineReducers } from 'redux';
import languageReducer from './languageReducer'
// import {combineReducers} from 'redux-immutable';
import testReducer from './testReducer';
import settingsReducer from './settingsReducer';
// Combine all
const appReducer = combineReducers({
  languageReducer,
  testReducer,
  settingsReducer
})

export default appReducer
