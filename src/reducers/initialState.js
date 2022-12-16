import {fromJS} from 'immutable';
import {LIGHT_MODE, DARK_MODE} from "../themes/Colors";

export default {


  language:   fromJS({
    name: 'vi',
  }),
  test: fromJS({
    fetching: false,
    success: false,
    errorMsg: null,
    data: null,
  }),

  settings:fromJS({
    theme: LIGHT_MODE
  })
}
