import * as testServices from '../services/testServices';
import actionTypes from './actionType';
import {ERROR_MSG} from "../apis/response";
import {_} from 'lodash'

export function getTestData({user, repo}) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.TEST_ACTION_PENDING,
    });
    return testServices.getTestData({user, repo}).then((response) => {
      dispatch(onGetTestDataSuccess(response.data))
      return response
    }).catch(error => {
      const msgError = error.message || ERROR_MSG.DEFAULT;
      dispatch({
        type: actionTypes.TEST_ACTION_FAIL, message: msgError
      });
      throw msgError;
    });
  }
}

export function onGetTestDataSuccess(data) {
  return {
    type: actionTypes.TEST_ACTION_SUCCESS, payload: {testData: data}
  }
}

