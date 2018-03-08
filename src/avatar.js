import BigNumber from "bignumber.js";
import { OPENSEA_URL } from "./constants";

export default class Avatar {
  constructor(attrs = {}) {
    this.setAttrs(attrs);
  }

  setAttrs(attrs) {
    const auction = attrs.auctions[0];
    const ownerSource = auction !== undefined ? auction.seller : attrs.owner;

    this.name = attrs.name || `Ethmoji ${attrs.token_id}`;
    this.tokenId = attrs.token_id;
    this.imageUrl = attrs.image_url;
    this.ownerAddress = (ownerSource || {}).address;
    this.ownerUsername = ((ownerSource || {}).user || {}).username;
    this.ownerLink = `${OPENSEA_URL}/accounts/${this.ownerAddress}`;
  }
}
