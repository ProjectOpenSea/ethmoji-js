import Web3 from "web3";
import contract from "truffle-contract";
import { Ethmoji } from "ethmoji-contracts";

import OpenSeaAPI from "./openSeaAPI";
import Avatar from "./avatar";
import Constants from "./constants";

const NETWORKS_BY_ID = {
  "1": "live",
  "2": "morden",
  "3": "ropsten",
  "4": "rinkeby"
};

export default class EthmojiAPI {
  constructor(web3Provider) {
    if (web3Provider === undefined) {
      throw new Error("Web3 provider is undefined");
    }

    this.web3Provider = web3Provider;
    this.web3 = new Web3(web3Provider);
  }

  async init() {
    this.network = await this.getNetwork();
    if (this.network !== "live" && this.network !== "rinkeby") {
      throw new Error("Please connect to the Mainnet or Rinkeby");
    }

    this.constants = new Constants(this.network);
    this.openSeaAPI = new OpenSeaAPI(this.constants.apiUrl);

    const EthmojiContract = contract(Ethmoji);
    EthmojiContract.setProvider(this.web3Provider);
    try {
      this.contractInstance = await EthmojiContract.at(
        this.constants.contractAddress
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAvatar(ownerAddress) {
    const tokenId = await this.contractInstance.getAvatar(ownerAddress);
    if (tokenId.toString() === "0") return undefined;
    try {
      const asset = await this.openSeaAPI.get(
        `/asset/${this.constants.contractAddress}/${tokenId.toString()}/`
      );
      console.log(asset);
      return new Avatar(asset);
    } catch (error) {
      throw new Error(error);
    }
  }

  getNetwork() {
    return new Promise((resolve, reject) => {
      this.web3.version.getNetwork((error, result) => {
        if (error) reject(error);
        else resolve(NETWORKS_BY_ID[result]);
      });
    });
  }
}
