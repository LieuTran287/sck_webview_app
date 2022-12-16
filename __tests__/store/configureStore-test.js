import configureStore from '../../src/store/configureStore';
import * as languageAction from "../../src/actions/languageAction";

const originalLog = console.log;

beforeAll(() => {
  console.log = jest.fn();
});

afterAll(() => {
  console.log = originalLog;
});
it("Should handle change flight form value", async function() {
  // arrange
  const {store} = await configureStore();

  // act
  const action = languageAction.changeLanguage("vi");
  store.dispatch(action);

  // assert
  const flightFormState = store.getState();
  expect(flightFormState.languageReducer.toJS().name).toEqual("vi");
});
