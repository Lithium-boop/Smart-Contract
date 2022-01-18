require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url:
        'https://eth-ropsten.alchemyapi.io/v2/vCwFGTylsbNZ7lVAQJUbQN3an_hOCo85',
      accounts: [
        'a82d5228ed1d8a5f6b52d1b9a73a7a94e09b9b91e13fa3ee7038b9165998c8ee',
      ],
    },
  },
}
