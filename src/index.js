import * as Web3 from "web3";
import { ContractAPI, OpenSeaAPI } from "./apis";

export default class Ethmoji {
  constructor(web3Provider) {
    this.web3 = new Web3(web3Provider);

    this.contractAPI = new ContractAPI();
    this.openSeaAPI = new OpenSeaAPI();
  }
}
