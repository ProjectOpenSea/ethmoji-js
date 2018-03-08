import param from "jquery-param";
import { decamelizeKeys } from "humps";

import { OPENSEA_API_URL } from "./constants";

export default class OpenSeaAPI {
  fetch(path, options = {}) {
    return fetch(OPENSEA_API_URL.toString() + path.toString(), {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(options.headers || {})
      }
    });
  }

  async get(path, data = {}) {
    const options = {
      method: "GET"
    };

    path += "?" + param(decamelizeKeys(data));

    let response = await this.fetch(path, options);
    response = this.checkStatus(response);
    return response.json();
  }

  async post(path, data = {}) {
    const options = {
      method: "POST",
      body: JSON.stringify(data)
    };
    let response = await this.fetch(path, options);
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
