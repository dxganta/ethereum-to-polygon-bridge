import React, { Component } from 'react';
import Image from 'next/image';
const config = require('../config');
import maticPOSClient from '../maticPosClient';
import getWeb3 from '../web3';
import ErrorMessage from '../components/ErrorMessage';
import 'font-awesome/css/font-awesome.min.css';

class BridgeTokenCard extends Component {
  network = config.erc20Tokens.mainnet;

  state = {
    bridgeToken: this.network[0],
    bridgeTokenValue: 0,
    accounts: [],
    errorMsg: '',
    loading: false,
  };

  handleBridgeTokenChange = (event) => {
    this.setState({
      bridgeToken: event.target.value,
    });
  };

  buildTokensList = (network) => {
    return network.map((token) => {
      return (
        <option key={token} value={token}>
          {token.toUpperCase()}
        </option>
      );
    });
  };

  async componentDidMount() {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();

    this.setState({ accounts: accounts });
  }

  handleOnTransferClick = async (event) => {
    this.setState({ loading: true, errorMsg: '' });

    const tokenAddress =
      config.tokenToAddressMap[this.state.bridgeToken].ethereum;
    const amount = this.state.bridgeTokenValue + '0'.repeat(18);
    try {
      await maticPOSClient.approveERC20ForDeposit(tokenAddress, amount, {
        from: this.state.accounts[0],
      });
      await maticPOSClient.depositERC20ForUser(
        tokenAddress,
        this.state.accounts[0],
        amount,
        {
          from: this.state.accounts[0],
        }
      );
    } catch (err) {
      this.setState({ errorMsg: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <div>
        <div className='rounded-3xl mx-auto h-64 w-96 bg-white'>
          <div className='p-4 bg-blue-100 h-4/6 rounded-t-3xl'>
            <div className='text-sm font-semibold bg-purple-200 text-purple-800 w-14 px-2 rounded'>
              FROM
            </div>
            <div className='font-semibold pt-1 pb-3 text-lg'>Ethereum</div>
            <form className='grid grid-cols-6 bg-white rounded-xl border-2 border-gray-300 h-12 w-full'>
              <input
                type='number'
                className='col-span-3 outline-none px-2 rounded-l-xl'
                value={this.state.bridgeTokenValue}
                onChange={(event) =>
                  this.setState({ bridgeTokenValue: event.target.value })
                }
              ></input>
              <button className='text-xs text-blue-600'>MAX</button>
              <div className='flex flex-rows items-center col-span-2 bg-gray-100 border mx-1 my-1 pl-2 gap-2 rounded-md'>
                <Image
                  src={`/${this.state.bridgeToken}.png`}
                  height='24'
                  width='24'
                />
                <select
                  className='outline-none bg-transparent'
                  value={this.state.bridgeToken}
                  onChange={this.handleBridgeTokenChange}
                >
                  {this.buildTokensList(this.network)}
                </select>
              </div>
            </form>
          </div>
          <div className='p-4'>
            <div className='text-sm bg-blue-200 font-semibold text-blue-800 w-8 px-2 rounded '>
              TO
            </div>
            <div className='font-semibold pt-1 text-lg'>Polygon</div>
          </div>
        </div>
        <ErrorMessage content={this.state.errorMsg} />
        <button
          onClick={this.handleOnTransferClick}
          className='block mx-auto focus:outline-none text-center cursor-pointer rounded-md py-2 w-96 bg-black font-semibold mt-4 text-white'
        >
          {this.state.loading ? (
            <i className='fa fa-lg fa-circle-o-notch fa-spin text-white'></i>
          ) : (
            <span>Transfer</span>
          )}
        </button>
        <div className='text-black mt-10 text-center'>
          Created with Love by @realdiganta. If this was of help to you, I am
          gladly aceepting donations at
          0xaf73867B57900b148Cfdc947bB1af9498cfb5488
        </div>
      </div>
    );
  }
}

export default BridgeTokenCard;
