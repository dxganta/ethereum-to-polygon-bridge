const MaticPOSClient = require('@maticnetwork/maticjs').MaticPOSClient;
const config = require('./config');

let maticPosClient;

let parentProvider;
let maticProvider;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running
  parentProvider = window.ethereum;
  maticProvider = window.ethereum;
}

maticPosClient = new MaticPOSClient({
  network: 'mainnet', // optional, default is testnet
  version: 'v1', // optional, default is mumbai
  parentProvider: parentProvider,
  maticProvider: maticProvider,
  posRootChainManager: config.root.mainnet.POSRootChainManager,
  posERC20Predicate: config.root.mainnet.posERC20Predicate,
});

export default maticPosClient;
