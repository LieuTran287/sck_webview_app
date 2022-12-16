import * as languageAction from './../../src/actions/languageAction';
import actionTypes from './../../src/actions/actionType';



describe("languageActions", () => {


  const originalLog = console.log;


  beforeAll(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = originalLog;
  });

  it("should create action language", () => {

    // arrange
    const expectedAction =
      {
        type: actionTypes.CHANGE_LANGUAGE,
        payload: {language:"vi"}
      };

    // act
    const action = languageAction.onChangeLanguage("vi") ;
    expect(action).toEqual(expectedAction);


    });
});
