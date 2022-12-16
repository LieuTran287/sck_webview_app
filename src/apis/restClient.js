import {create} from 'apisauce'
import * as Urls from './urls'
import Methods from './methods'
import Response from './response'
import {log} from '../utils/commonUtils'

class RestClient {
  static token = 'Bearer {your token}';

  static debugAPI = true;

  constructor(method, endpoint, timeout = 300000) {
    this.method = method
    this.endpoint = endpoint
    this.timeout = timeout
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'authorization': RestClient.token,
    }
    this.BASE_URL = Urls.BASE_URL;
  }

  execute(headers, body) {
    if (headers !== undefined && headers !== null) {
      this.headers = Object.assign(this.headers, headers)
    }

    this.restClient = create({
      baseURL: this.BASE_URL,
      headers: this.headers,
      timeout: this.timeout
    })

    let response = new Response({})
    switch (this.method) {
      case Methods.GET: {
        return this.restClient.get(this.endpoint, body).then((res) => {
          return Response.responseModel(res || {});
        })
      }
      case Methods.POST: {
        return this.restClient.post(this.endpoint, body).then((res) => {
          return Response.responseModel(res || {});
        })
      }
      case Methods.PUT: {
        return this.restClient.put(this.endpoint, body).then((res) => {
          return Response.responseModel(res || {});
        })
      }
      case Methods.DELETE: {
        return this.restClient.delete(this.endpoint, body).then((res) => {
          return Response.responseModel(res || {});
        })
      }
      case Methods.PATCH: {
        return this.restClient.patch(this.endpoint, body).then((res) => {
          return Response.responseModel(res || {});
        })
      }
      default: {
        return response
      }
    }
  }
}

export default RestClient
