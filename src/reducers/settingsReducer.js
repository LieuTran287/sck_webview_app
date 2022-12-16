import actionTypes from '../actions/actionType'
import InitialState from './initialState';
import GlobalStore from "../themes/GlobalStore";
import Colors from "../themes/Colors";

export default function settingsReducer(state = InitialState.settings, action) {

  const { type } = action;
  switch (type) {
    case actionTypes.CHANGE_THEME:{
      GlobalStore.theme = action.payload.theme;
      GlobalStore.color = Colors(action.payload.theme);
      return state.set("theme", action.payload.theme)
    }
    default:
      return state;
  }
}
