import * as settingsActions from './../../src/actions/settingsActions';
import actionTypes from './../../src/actions/actionType';
import {LIGHT_MODE} from "../../src/themes/Colors";



describe("settingsActions", () => {


  const originalLog = console.log;


  beforeAll(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = originalLog;
  });

  it("should create settings language", () => {

    // arrange
    const expectedAction =
      {
        type: actionTypes.CHANGE_THEME,
        payload: {theme:LIGHT_MODE}
      };

    // act
    const action = settingsActions.onChangeTheme({theme:LIGHT_MODE}) ;
    expect(action).toEqual(expectedAction);


    });
});
