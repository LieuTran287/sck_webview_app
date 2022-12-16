import RestClient from './restClient'
import Methods from './methods'
import * as Urls  from "./urls";

export default class BaseApi {
  constructor () {
    this.Urls = Urls;
    this.Methods = Methods;
  }

  execute (method, endpoint, headers = undefined,   body = undefined) {
    const restClient = new RestClient(method, endpoint)
    return restClient.execute(headers, body)
  }
}
