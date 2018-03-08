import { ContractAPI, OpenSeaAPI } from "./api";

export default class Ethmoji {
  contractAPI = undefined;
  openSeaAPI = undefined;

  constructor(web3Provider) {
    this.contractAPI = new ContractAPI(web3Provider);
    this.openSeaAPI = new OpenSeaAPI();
  }

  async getAvatar(ownerAddress) {
    const tokenId = await this.contractAPI.getAvatar(ownerAddress);
    console.log(tokenId);
  }
}
