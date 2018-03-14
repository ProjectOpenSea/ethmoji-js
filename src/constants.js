const CONTRACT_ADDRESSES = {
  live: undefined,
  rinkeby: "0x91edecf2ebf1230441d0a175eb587d8c31872814"
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
