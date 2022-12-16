import * as settingsActions from './../../src/actions/settingsActions';
import settingsReducer from "../../src/reducers/settingsReducer";
import {fromJS} from "immutable";
import {LIGHT_MODE} from "../../src/themes/Colors";


describe("settingsReducer", () => {

  const initialState = fromJS({
    theme: LIGHT_MODE
  });

  const originalLog = console.log;

  beforeAll(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = originalLog;
  });

  it("should create settingReducer ", () => {

    const action = settingsActions.onChangeTheme({theme:LIGHT_MODE});
      const newState = settingsReducer(initialState,action);
      expect(newState.toJS().theme).toEqual(initialState.toJS().theme);

    });

});
