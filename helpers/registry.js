import {
    MsgBurnONFT,
    MsgCreateDenom,
    MsgMintONFT,
    MsgTransferDenom,
    MsgTransferONFT,
    MsgUpdateDenom,
} from './mjs/modules/onft/v1beta1/tx.js';

export const customTypes = {
    CreateDenom: {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgCreateDenom',
        type: MsgCreateDenom,
    },
    UpdateDenom: {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgUpdateDenom',
        type: MsgUpdateDenom,
    },
    TransferDenom: {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgTransferDenom',
        type: MsgTransferDenom,
    },
    MintONFT: {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgMintONFT',
        type: MsgMintONFT,
    },
    TransferONFT: {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgTransferONFT',
        type: MsgTransferONFT,
    },
    BurnONFT: {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgBurnONFT',
        type: MsgBurnONFT,
    },

};

export const customRegistry = [[
    customTypes.CreateDenom.typeUrl,
    customTypes.CreateDenom.type,
], [
    customTypes.UpdateDenom.typeUrl,
    customTypes.UpdateDenom.type,
], [
    customTypes.TransferDenom.typeUrl,
    customTypes.TransferDenom.type,
], [
    customTypes.MintONFT.typeUrl,
    customTypes.MintONFT.type,
], [
    customTypes.TransferONFT.typeUrl,
    customTypes.TransferONFT.type,
], [
    customTypes.BurnONFT.typeUrl,
    customTypes.BurnONFT.type,
]];
