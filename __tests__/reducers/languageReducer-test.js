import * as languageAction from './../../src/actions/languageAction';
import languageReducer from "../../src/reducers/languageReducer";
import {fromJS} from "immutable";


describe("languageReducer", () => {
  const initialState =  fromJS({
    name: 'en',
  });

  const originalLog = console.log;

  beforeAll(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = originalLog;
  });

  it("should create languageReducer ", () => {

    const action = languageAction.onChangeLanguage("en");
      const newState = languageReducer(initialState,action);
      expect(newState.toJS().name).toEqual(initialState.toJS().name);

    });

});
