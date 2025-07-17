# Sync call fuckyea template

Want to mess around with Sync calls?

This template has two contracts:
- `actions.entry.cpp` - Contract you can call from outside the blockchain
- `syncs.entry.cpp` - Contract you can call from inside the blockchain

## Bulding

```
npx fuckyea build
```

## Deploying

Copy the `.env.example` to `.env` and fill out the details there:
- `PRIVATE_KEY` - Your private key that controls both accounts
- `SYNC_ACCOUNT` - The account with sync calls
- `ACTION_ACCOUNT` - The account with the actions

(This demo uses the same private key for both accounts, but you can use different keys if you want)

If you want to change account and keys you need to do so both in `fuckyea.config.js` as 
well as in `deployments/devnet.ts` and in the `actions.entry.cpp` contract.

You can create an account and keys here: https://testnet-1.vaulta.com/

Now run:

```
npx fuckyea deploy devnet --build
```
