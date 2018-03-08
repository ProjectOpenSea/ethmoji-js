# ethmoji-js

Let's developers interact with the Ethmoji game, starting with fetching your users' Ethmoji avatar.

##### Installation & Setup:

```
yarn add ethmoji-js
```

##### Using ES6 style imports (recommended):

```javascript
import EthmojiAPI from "ethmoji-js";
...

const ethmojiAPI = new EthmojiAPI();
await ethmojiAPI.init(web3.currentProvider)
await avatar =  ethmojiAPI.getAvatar(ownerAddress);
=> Avatar = {
  name: Ethmoji name
  tokenId: Ethmoji tokenId in the smart contract
  imageUrl: Ethmoji image url for displaying
  ownerAddress: Ethmoji ownerAddress
  ownerUsername: Ethmojis ownerUsername on OpenSea
  ownerLink: Link to account on OpenSea
}
```
