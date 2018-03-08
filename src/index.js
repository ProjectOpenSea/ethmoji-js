import Web3 from "web3";
import contract from "truffle-contract";
import { Ethmoji } from "ethmoji-contract";

import { ETHMOJI_ADDRESS } from "./constants";
import OpenSeaAPI from "./OpenSeaAPI";
import Avatar from "./Avatar";

export default class EthmojiAPI {
  contractInstance = undefined;
  openSeaAPI = undefined;
  web3Provider = undefined;
  networkId = undefined;

  async init(web3Provider, network = "rinkeby") {
    if (web3Provider === undefined)
      throw new Error("Web3 provider is undefined");
    this.web3Provider = web3Provider;
    this.openSeaAPI = new OpenSeaAPI();

    const EthmojiContract = contract(Ethmoji);
    EthmojiContract.setProvider(this.web3Provider);
    try {
      this.contractInstance = await EthmojiContract.at(ETHMOJI_ADDRESS);
      this.web3.version.getNetwork((error, result) => {
        this.networkId = result;
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAvatar(ownerAddress) {
    const tokenId = await this.contractInstance.getAvatar(ownerAddress);
    if (tokenId.toString() === "0") return undefined;
    try {
      const asset = await this.openSeaAPI.get(
        `/asset/${ETHMOJI_ADDRESS}/${tokenId.toString()}/`
      );
      return new Avatar(asset);
    } catch (error) {
      throw new Error(error);
    }
  }

  get web3() {
    return new Web3(this.web3Provider);
  }
}
