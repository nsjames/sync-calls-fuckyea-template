module.exports = {
    networks:{
        devnet: {
            node_url: 'https://api.testnet-1.vaulta.com',
            accounts: [
                {
                    name: process.env.ACTION_ACCOUNT,
                    private_key: process.env.PRIVATE_KEY
                },
                {
                    name: process.env.SYNC_ACCOUNT,
                    private_key: process.env.PRIVATE_KEY
                }
            ]
        }
    },
}
