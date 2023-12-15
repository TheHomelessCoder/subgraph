import { Address, log } from "@graphprotocol/graph-ts";

export function getTokenByPriceFeed(priceFeed: string): Address {
  // all keys (price feed addresses) should be in lowercase
  let priceFeedToToken = new Map<string, string>()

  // Avalanche Fuji AVAX
  // priceFeedToToken.set("0x6c2441920404835155f33d88faf0545b895871b1", "0x1D308089a2D1Ced3f1Ce36B1FcaF815b07217be3");

  // Avalanche mainnet AVAX
  // priceFeedToToken.set("0x9450a29ef091b625e976ce66f2a5818e20791999", "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7");

  // Arbitrum Goerli ETH
  // priceFeedToToken.set("0xc975defb12c5e83f2c7e347831126cf136196447", "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3");

  // Arbitrum mainnet ETH

  // BASE GOERLI
  priceFeedToToken.set('0x40c164a5c5022f25ec41bb96f6fac14b15ce99c1','0xcb3026f0a031b99be7fdb1c0df06bc62065937e2');

  let address = priceFeedToToken.get(priceFeed);
  if (!address) {
    log.error("Unknown price feed: {}", [priceFeed]);
    throw new Error("Unknown price feed: " + priceFeed);
  }
  return Address.fromString(address);
}