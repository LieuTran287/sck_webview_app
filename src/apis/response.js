import {CLIENT_ERROR, NETWORK_ERROR, SERVER_ERROR} from 'apisauce';
import RestClient from "./restClient";
import {log} from '../utils/commonUtils'

export const ERROR_CODE = {
  LOGIN_FAIL: 'LOGIN_FAIL',
  UN_KNOWN: 'UN_KNOWN',
};

export const ERROR_MSG = {
  LOGIN_FAIL: 'The email or password is not corrected',
  SERVER_ERROR: 'Have error in server',
  TIMEOUT_ERROR: 'Request is timeout',
  NETWORK_ERROR: 'Can not connect server',
  DEFAULT: 'Something wrong',
};


export default class Response {

  static responseModel(res) {
    let error = null;
    let resultSuccess = null;

    if (!res.ok) {
      switch (res.problem) {
        case NETWORK_ERROR: {
          error = {
            code: NETWORK_ERROR,
            message: ERROR_MSG.NETWORK_ERROR,
          };
          break;
        }
        case SERVER_ERROR: {
          error = {
            code: SERVER_ERROR,
            message: ERROR_MSG.SERVER_ERROR,
          };
          break;
        }

        case CLIENT_ERROR: {
          error = {
            code:
              res.data === ERROR_CODE.LOGIN_FAIL
                ? ERROR_CODE.LOGIN_FAIL
                : ERROR_CODE.UN_KNOWN,
            message:
              res.data === ERROR_CODE.LOGIN_FAIL
                ? ERROR_MSG.LOGIN_FAIL
                : ERROR_MSG.DEFAULT,
          };
          break;
        }

        default: {
          error = {
            code: ERROR_CODE.UN_KNOWN,
            message: ERROR_MSG.DEFAULT,
          };
        }
      }
    } else {
      resultSuccess = {
        success: res.ok,
        data: res.ok ? res.data : '',
      };
    }
    if (RestClient.debugAPI) {
      log("-----------API RESPONSE----------",res);
      log("------------RESPONSE CONVERTED------------", {error, resultSuccess});
    }
    return {error, resultSuccess};
  }
}
