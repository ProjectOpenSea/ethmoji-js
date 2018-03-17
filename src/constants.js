const CONTRACT_ADDRESSES = {
  live: "0xa6d954d08877f8ce1224f6bfb83484c7d3abf8e9",
  rinkeby: "0x40eb59a8cc2d865baf536dd9d0ec3108934afced"
};

const OPENSEA_URLS = {
  live: "https://opensea.io",
  rinkeby: "https://rinkeby.opensea.io"
};

const API_URLS = {
  live: "https://opensea-api.herokuapp.com",
  rinkeby: "https://etherbay-api-1.herokuapp.com"
};

export default class Constants {
  constructor(network) {
    this.network = network;
  }

  get baseUrl() {
    return OPENSEA_URLS[this.network];
  }

  get apiUrl() {
    return API_URLS[this.network];
  }

  get contractAddress() {
    return CONTRACT_ADDRESSES[this.network];
  }
}
