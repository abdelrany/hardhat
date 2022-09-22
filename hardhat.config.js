/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
const INFURA_URL = 'https://rinkeby.infura.io/v3/b431c25052ef485f954cb8cd90aad833'
const PRIVATE_KEY = 'e4cab5b7361d5ea333dca3296635a723ff3ac12757ff5d06422285a80d19b82a'
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};