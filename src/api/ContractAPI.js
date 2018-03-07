import { Ethmoji } from "ethmoji-contracts";
import { ETHMOJI_ADDRESS } from "../constants";

export default class ContractAPI {
  ethmoji = null;

  constructor(web3Provider) {
    Ethmoji.setProvider(web3Provider);
    Ethmoji.at(ETHMOJI_ADDRESS)
      .then(instance => {
        return (this.ethmoji = instance);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
