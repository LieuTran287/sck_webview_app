import actionTypes from '../actions/actionType';
import InitialState from './initialState';
import I18n from "../I18n/I18n";

export default function languageReducer (state = InitialState.language, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      I18n.locale = action.language;
      return state.merge({...state,name:action.payload.language})

    default:
      return state
  }
}
