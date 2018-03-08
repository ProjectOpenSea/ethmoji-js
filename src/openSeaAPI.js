import param from "jquery-param";
import { decamelizeKeys } from "humps";

import { OPENSEA_API_URL } from "./constants";

export default class OpenSeaAPI {
  fetch(path) {
    return fetch(OPENSEA_API_URL.toString() + path.toString(), {
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
