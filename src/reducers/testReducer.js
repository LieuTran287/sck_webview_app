import actionTypes from '../actions/actionType'
import InitialState from './initialState'

export default function testReducer(state = InitialState.test, action) {
  switch (action.type) {
    case actionTypes.TEST_ACTION_PENDING:
      return state.merge({success: false, fetching: true});
    case actionTypes.TEST_ACTION_SUCCESS:
      return state.merge({success: true, fetching: false, data: action.payload.testData});
    case actionTypes.TEST_ACTION_FAIL:
      return state.merge({success: false, fetching: false, errorMsg: action.message});
    default:
      return state
  }
}
