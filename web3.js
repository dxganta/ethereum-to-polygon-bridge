import Web3 from 'web3';

const getWeb3 = async () => {
  let web3;

  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // We are in the browser and metamask is running
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
    return web3;
  } else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
      'https://goerli.infura.io/v3/60a0595f8be64729901df215fc5ece23'
    );

    web3 = new Web3(provider);
    return web3;
  }
};

export default getWeb3;
