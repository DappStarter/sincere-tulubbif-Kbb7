require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note spike pulse install basic olympic slow'; 
let testAccounts = [
"0x2615b3714cddc074dbfc36b2133d524982d9614455ccd961ab8b1ed3bf82cd21",
"0x3f7a1820846c95b89b880e09ed00084d837710ca9c028e58888695e9dd9bf08f",
"0x8ee0ff0855e8df5b61f9bf72ca02ea07f61dcf81bfeae55eda2dec233ba79484",
"0xd3e17b4b1c2ef069bb87a09bb243f43bce7a835728f624d13c8e7ffa8d7456bf",
"0xa78354fb1792d7d27ea452bf29e5cdec8297a9da87c405a77abdec8219b5b4e3",
"0x036ec813b761833c7760588f7d1223588bac209d6210de051db49ab3c4f0b921",
"0x50fd24e8ecc5645446cdf2a15da56e3d41ea522375cc307c242429aa4283da1b",
"0x46b9ac35dfce3dc83c39b94ccc1ba2218ebe4a174029915ac7aac108d21112d6",
"0xc211f921ef182786dab90e934657af4cf7309cbfd436ee6195d1849f42ef9e39",
"0x020d0137b3f499cd49e719f4b7816faaa1186816a7892c74e405dc7afc054ae7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

