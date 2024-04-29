require("@matterlabs/hardhat-zksync-solc");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
    hardhat: {},
    polygon_amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/zZkKtQ8Mlm94ou_i3Q54eKav26wv4p79",
      accounts: [`0x${"67a62ee46a04f24036d83a088faf0598952e813b5c7266e45da7061c1faad418"}`]
    }
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    defaultNetwork: 'goerli',
    networks: {
      hardhat: {},
      goerli: {
        url:'https://rpc.ankr.com/eth_goerli',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
      polygon_amoy: {
        url: "https://polygon-amoy.g.alchemy.com/v2/zZkKtQ8Mlm94ou_i3Q54eKav26wv4p79",
        accounts: [`0x${"67a62ee46a04f24036d83a088faf0598952e813b5c7266e45da7061c1faad418"}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
