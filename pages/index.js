import React, { Component } from 'react';
import BridgeTokenCard from '../components/BridgeTokenCard';
import getWeb3 from '../web3';

class Home extends Component {
  state = {
    accounts: [],
    web3: {},
  };

  async componentDidMount() {
    const web3 = await getWeb3();

    const accounts = await web3.eth.getAccounts();

    this.setState({ web3: web3, accounts: accounts });
  }

  render() {
    return (
      <div>
        <div className='flex flex-col justify-center items-end bg-white h-20 w-screen'>
          {/* <button
            onClick={this.handleConnectWalletClick}
          
            className='px-3 py-1 focus:outline-none mr-10 border-2 border-purple-700 rounded-3xl w-max hover:text-white hover:bg-purple-700'
          >
            Connect Wallet
          </button> */}
        </div>
        <div className='bg-blue-400 h-screen w-screen'>
          <div className='pt-10'></div>
          <BridgeTokenCard />
        </div>
      </div>
    );
  }
}

export default Home;
