import param from "jquery-param";
import { decamelizeKeys } from "humps";

export default class OpenSeaAPI {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  fetch(path) {
    return fetch(this.apiUrl.toString() + path.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  async get(path, data = {}) {
    path += "?" + param(decamelizeKeys(data));

    let response = await this.fetch(path);
    response = this.checkStatus(response);
    return response.json();
  }

  checkStatus(response) {
    if (!response.ok && response.status === 401) {
      throw new Error("Unauthorized");
    }
    return response;
  }
}
