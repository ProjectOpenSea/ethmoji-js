const CONTRACT_ADDRESSES = {
  live: undefined,
  rinkeby: "0x8d37449b2cd36a6ac57011f43490a8ed3685d3c9"
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
