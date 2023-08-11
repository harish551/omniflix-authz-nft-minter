import { v4 as uuidv4 } from 'uuid';
import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { SigningStargateClient, isDeliverTxSuccess, defaultRegistryTypes } from "@cosmjs/stargate";
import { MsgMintONFT } from './mjs/modules/onft/v1beta1/tx.js'
import { MsgExec } from 'cosmjs-types/cosmos/authz/v1beta1/tx.js'
import {customRegistry} from './registry.js'

// testnet
const rpcUrl = 'https://rpc.testnet.omniflix.network'

const defaultGas = 200000
const minGasPrice = 0.001

const mnemonic = process.env.AUTHZ_ACCOUNT_MNEMONIC || ''
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "omniflix"});
const [firstAccount] = await wallet.getAccounts();
const address = firstAccount.address
console.log(address)

const registry = 	new Registry([...defaultRegistryTypes, ...customRegistry])
const client = await SigningStargateClient.connectWithSigner(
    rpcUrl,
    wallet,
    { registry: registry }
);

export function genUniqueID(prefix) {
    return prefix + uuidv4().replace(/-/g, '');
}

export const mintNft = async (mintMessages) => {
    const messages = []
    for (const mintMsg of mintMessages) {
        const msgMint = MsgMintONFT.fromPartial(mintMsg)
        const msgMintAny = {
            typeUrl: '/OmniFlix.onft.v1beta1.MsgMintONFT',
            value: MsgMintONFT.encode(msgMint).finish()
        }
        messages.push(msgMintAny)
    }

    const msgMintAuthz = MsgExec.fromPartial({
        grantee: address,
        msgs: messages
    })
    const msgMintAuthzAny = {
        typeUrl: '/cosmos.authz.v1beta1.MsgExec',
        value: msgMintAuthz
    }
    const gasLimit = messages.length * defaultGas
    const feeAmount = Math.ceil(gasLimit * minGasPrice)

    const fee = {
        amount: [
            {
                denom: "uflix",
                amount: feeAmount.toString(),
            },
        ],
        gas: gasLimit.toString()
    };
    console.log(fee)
    const memo = "Minted by using OmniFlix authz mint helper";

    console.log(msgMintAuthzAny, fee)

    const result = await client.signAndBroadcast(
        firstAccount.address,
        [msgMintAuthzAny],
        fee,
        memo
    );

    const success = isDeliverTxSuccess(result)
    return { success, result }
}
