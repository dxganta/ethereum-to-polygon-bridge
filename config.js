const infuraId = '<INFURA_PROJECT_ID>';

module.exports = {
  root: {
    goerli: {
      RPC: 'https://goerli.infura.io/v3/' + infuraId,
      POSRootChainManager: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74',
      DERC20: '0x655F2166b0709cd575202630952D71E2bB0d61Af',
      DERC721: '0x084297B12F204Adb74c689be08302FA3f12dB8A7',
      DERC1155: '0x2e3Ef7931F2d0e4a7da3dea950FF3F19269d9063',
      posERC20Predicate: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34',
      posERC721Predicate: '0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b',
      posERC1155Predicate: '0xB19a86ba1b50f0A395BfdC3557608789ee184dC8',
      posEtherPredicate: '0xe2B01f3978c03D6DdA5aE36b2f3Ac0d66C54a6D5',
    },
    mainnet: {
      RPC: 'https://mainnet.infura.io/v3/' + infuraId,
      POSRootChainManager: '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77',
      posERC20Predicate: '0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf',
      posERC721Predicate: '0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD',
      posERC1155Predicate: '0x0B9020d4E32990D67559b1317c7BF0C15D6EB88f',
      posEtherPredicate: '0x8484Ef722627bf18ca5Ae6BcF031c23E6e922B30',
    },
  },
  child: {
    polygon_mumbai: {
      RPC: 'https://polygon-mumbai.infura.io/v3/' + infuraId,
      DERC20: '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1',
      DERC721: '0x757b1BD7C12B81b52650463e7753d7f5D0565C0e',
      DERC1155: '0xA07e45A987F19E25176c877d98388878622623FA',
      MaticWETH: '0x714550C2C1Ea08688607D86ed8EeF4f5E4F22323',
    },
    polygon_mainnet: {
      RPC: 'https://polygon-mainnet.infura.io/v3/' + infuraId,
    },
  },
  tokenToAddressMap: {
    dai: {
      ethereum: '0x6b175474e89094c44da98b954eedeac495271d0f',
      matic: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    },
    usdc: {
      ethereum: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      matic: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    },
    usdt: {
      ethereum: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      matic: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    },
    derc20: {
      ethereum: '0x655F2166b0709cd575202630952D71E2bB0d61Af',
      matic: '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1',
    },
  },
  erc20Tokens: {
    mainnet: ['dai', 'usdc', 'usdt'],
    testnet: ['derc20'],
  },
};
