import BaseApi from './baseApi';

class TestAPI extends BaseApi {
  getTestData({user, repo}) {
    const endpoint = this.Urls.GET_TEST_DATA.replace("{user}", user).replace("{repo}", repo);
    return super.execute(this.Methods.GET, endpoint, { authorization : null});
  }
}

export default new TestAPI()
