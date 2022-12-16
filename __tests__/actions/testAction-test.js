import * as testActions from './../../src/actions/testActions';
import actionTypes from './../../src/actions/actionType';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from "fetch-mock";
import TestModel from '../../src/models/TestModel';

const buildStore = configureMockStore([thunk]);

describe("testActions", () => {
  let store;
  const initialState = {
    "avatar": undefined,
    "email": undefined,
    "full_name": "octokit/octokit.rb",
    "id": 417862,
    "name": "octokit.rb",
    "owner": {
      "avatar_url": "https://avatars0.githubusercontent.com/u/3430433?v=4",
      "events_url": "https://api.github.com/users/octokit/events{/privacy}",
      "followers_url": "https://api.github.com/users/octokit/followers",
      "following_url": "https://api.github.com/users/octokit/following{/other_user}",
      "gists_url": "https://api.github.com/users/octokit/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/octokit",
      "id": 3430433,
      "login": "octokit",
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjM0MzA0MzM=",
      "organizations_url": "https://api.github.com/users/octokit/orgs",
      "received_events_url": "https://api.github.com/users/octokit/received_events",
      "repos_url": "https://api.github.com/users/octokit/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/octokit/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octokit/subscriptions",
      "type": "Organization",
      "url": "https://api.github.com/users/octokit",

    }
  }

  const originalLog = console.log;
  afterEach(()=>{
    fetchMock.restore();
  });

  beforeAll(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = originalLog;
  });

  it("should create action TEST_ACTION_PENDING", () => {

    fetchMock.mock("*",{
      body:initialState,
      headers : { "content-type" : "application/json"}
    });

    // arrange
    const expectedAction = [
      {
        type: actionTypes.TEST_ACTION_PENDING,
      },
      {
        type: actionTypes.TEST_ACTION_SUCCESS,
        payload: {testData: new TestModel(initialState)}
      }
    ];
    store = buildStore(initialState);
    // act
    return store.dispatch(testActions.getTestData({user: "octokit", repo: "octokit.rb"})).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        }
       )
  });

});
