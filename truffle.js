module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 4700000
    },
    minikube: {
      host: "255.255.255.255",
      port: 000000,
      network_id: "*", // Match any network id
      gas: 4700000
    },
    ropsten: {
      provider: new HDWalletProvider(Credentials.mnemonic, `https://ropsten.infura.io/${Credentials.infura_apikey}`),
      network_id: 3,
      gas: 4612388,
      gasPrice: 110000000000,
      account: '0x0283c049ed4705e2d98c807dbafdaf725f34b8d2'
    },
    stage_dev: {
      provider: new HDWalletProvider(Credentials.mnemonic, `https://ropsten.infura.io/${Credentials.infura_apikey}`),
      network_id: 3,
      gas: 4612388,
      gasPrice: 110000000000,
      account: '0x0283c049ed4705e2d98c807dbafdaf725f34b8d2'
    },
    stage_prod: {
      provider: new HDWalletProvider(Credentials.mnemonic, `https://ropsten.infura.io/${Credentials.infura_apikey}`),
      network_id: 3,
      gas: 4612388,
      gasPrice: 110000000000,
      account: '0x0283c049ed4705e2d98c807dbafdaf725f34b8d2'
    }
  }


};
