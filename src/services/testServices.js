import testApis from '../apis/testApis';
import TestModel from '../models/TestModel';

export function getTestData({user, repo}) {
  return testApis.getTestData({user, repo}).then(res => {
    if (res.error === null) {
      res.data = new TestModel(res.resultSuccess.data);
    } else {
      throw res.error;
    }
    return res;
  })
}
