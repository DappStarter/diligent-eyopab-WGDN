require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain quality hunt loan flat gauge'; 
let testAccounts = [
"0x3a0cc03db7174b69b2037f7a84ed07505e84a075b61d22aa4e704ec968ea1b2c",
"0x5843c5f08c7ae65cfaf6bb50ec2a1054f270689d28e2dc13db27d4630d8548b5",
"0x822a3d817646f98a60b165776ddd79cdfcdf0c73dc3dfe537ef79d98d95e602e",
"0xb56135fc7eaa37f64a035038fcb1c421f532bc2e7616ce5d3d5f81f63572c91b",
"0x59b2bfc303df7aa32a40aaaf33a8c49b81906844198c1ad30eb8e8674a885016",
"0x5efcdd7b109dfabbba139b07ead2141842221de9b4a893023b8eb0ff8335bde3",
"0xb01a33d562e986d960c8f692d5fde9830c4d4b5b244a80db48e0c5d615dc3997",
"0x7959656678daca6f13ae7e05d14b409747603e21e7a9b53b73954b0f578b1ee4",
"0xd313c35c1afa60f29128ebe2bee6b9fef037950331128a7a74b74f6d3fec141d",
"0x87f667466e8e6c57568098b2b9f8f8985bf5faf1019a42df05fa82f416e89db2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


