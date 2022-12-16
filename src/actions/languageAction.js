import actionTypes from './actionType'

export function changeLanguage(language) {
  return function (dispatch) {
    return (
      dispatch(onChangeLanguage(language))
    );
  }
}

export function onChangeLanguage(language) {
    return  {
        type: actionTypes.CHANGE_LANGUAGE, payload: {language}
      }

}
