import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Metadata } from "./onft";
import _m0 from "protobufjs/minimal";
function createBaseMsgCreateDenom() {
    return {
        id: "",
        symbol: "",
        name: "",
        description: "",
        previewUri: "",
        schema: "",
        sender: "",
        creationFee: Coin.fromPartial({})
    };
}
export const MsgCreateDenom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(42).string(message.previewUri);
        }
        if (message.schema !== "") {
            writer.uint32(50).string(message.schema);
        }
        if (message.sender !== "") {
            writer.uint32(58).string(message.sender);
        }
        if (message.creationFee !== undefined) {
            Coin.encode(message.creationFee, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.previewUri = reader.string();
                    break;
                case 6:
                    message.schema = reader.string();
                    break;
                case 7:
                    message.sender = reader.string();
                    break;
                case 8:
                    message.creationFee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenom();
        message.id = object.id ?? "";
        message.symbol = object.symbol ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.previewUri = object.previewUri ?? "";
        message.schema = object.schema ?? "";
        message.sender = object.sender ?? "";
        message.creationFee = object.creationFee !== undefined && object.creationFee !== null ? Coin.fromPartial(object.creationFee) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            symbol: object.symbol,
            name: object.name,
            description: object.description,
            previewUri: object.preview_uri,
            schema: object.schema,
            sender: object.sender,
            creationFee: object?.creation_fee ? Coin.fromAmino(object.creation_fee) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.symbol = message.symbol;
        obj.name = message.name;
        obj.description = message.description;
        obj.preview_uri = message.previewUri;
        obj.schema = message.schema;
        obj.sender = message.sender;
        obj.creation_fee = message.creationFee ? Coin.toAmino(message.creationFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDenom.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
            value: MsgCreateDenom.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDenomResponse() {
    return {};
}
export const MsgCreateDenomResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateDenomResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse",
            value: MsgCreateDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDenom() {
    return {
        id: "",
        name: "",
        description: "",
        previewUri: "",
        sender: ""
    };
}
export const MsgUpdateDenom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(34).string(message.previewUri);
        }
        if (message.sender !== "") {
            writer.uint32(42).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.previewUri = reader.string();
                    break;
                case 5:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDenom();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.previewUri = object.previewUri ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            name: object.name,
            description: object.description,
            previewUri: object.preview_uri,
            sender: object.sender
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.name = message.name;
        obj.description = message.description;
        obj.preview_uri = message.previewUri;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateDenom.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
            value: MsgUpdateDenom.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDenomResponse() {
    return {};
}
export const MsgUpdateDenomResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateDenomResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse",
            value: MsgUpdateDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTransferDenom() {
    return {
        id: "",
        sender: "",
        recipient: ""
    };
}
export const MsgTransferDenom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferDenom();
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            sender: object.sender,
            recipient: object.recipient
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.sender = message.sender;
        obj.recipient = message.recipient;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransferDenom.decode(message.value);
    },
    toProto(message) {
        return MsgTransferDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
            value: MsgTransferDenom.encode(message).finish()
        };
    }
};
function createBaseMsgTransferDenomResponse() {
    return {};
}
export const MsgTransferDenomResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgTransferDenomResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransferDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTransferDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse",
            value: MsgTransferDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMintONFT() {
    return {
        id: "",
        denomId: "",
        metadata: Metadata.fromPartial({}),
        data: "",
        transferable: false,
        extensible: false,
        nsfw: false,
        royaltyShare: "",
        sender: "",
        recipient: ""
    };
}
export const MsgMintONFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
        if (message.data !== "") {
            writer.uint32(34).string(message.data);
        }
        if (message.transferable === true) {
            writer.uint32(40).bool(message.transferable);
        }
        if (message.extensible === true) {
            writer.uint32(48).bool(message.extensible);
        }
        if (message.nsfw === true) {
            writer.uint32(56).bool(message.nsfw);
        }
        if (message.royaltyShare !== "") {
            writer.uint32(66).string(message.royaltyShare);
        }
        if (message.sender !== "") {
            writer.uint32(74).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(82).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintONFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.data = reader.string();
                    break;
                case 5:
                    message.transferable = reader.bool();
                    break;
                case 6:
                    message.extensible = reader.bool();
                    break;
                case 7:
                    message.nsfw = reader.bool();
                    break;
                case 8:
                    message.royaltyShare = reader.string();
                    break;
                case 9:
                    message.sender = reader.string();
                    break;
                case 10:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMintONFT();
        message.id = object.id ?? "";
        message.denomId = object.denomId ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        message.data = object.data ?? "";
        message.transferable = object.transferable ?? false;
        message.extensible = object.extensible ?? false;
        message.nsfw = object.nsfw ?? false;
        message.royaltyShare = object.royaltyShare ?? "";
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            denomId: object.denom_id,
            metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined,
            data: object.data,
            transferable: object.transferable,
            extensible: object.extensible,
            nsfw: object.nsfw,
            royaltyShare: object.royalty_share,
            sender: object.sender,
            recipient: object.recipient
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.denom_id = message.denomId;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        obj.data = message.data;
        obj.transferable = message.transferable;
        obj.extensible = message.extensible;
        obj.nsfw = message.nsfw;
        obj.royalty_share = message.royaltyShare;
        obj.sender = message.sender;
        obj.recipient = message.recipient;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMintONFT.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgMintONFT.decode(message.value);
    },
    toProto(message) {
        return MsgMintONFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
            value: MsgMintONFT.encode(message).finish()
        };
    }
};
function createBaseMsgMintONFTResponse() {
    return {};
}
export const MsgMintONFTResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintONFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgMintONFTResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMintONFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgMintONFTResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMintONFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse",
            value: MsgMintONFTResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTransferONFT() {
    return {
        id: "",
        denomId: "",
        sender: "",
        recipient: ""
    };
}
export const MsgTransferONFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(34).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferONFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                case 4:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferONFT();
        message.id = object.id ?? "";
        message.denomId = object.denomId ?? "";
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            denomId: object.denom_id,
            sender: object.sender,
            recipient: object.recipient
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.denom_id = message.denomId;
        obj.sender = message.sender;
        obj.recipient = message.recipient;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferONFT.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransferONFT.decode(message.value);
    },
    toProto(message) {
        return MsgTransferONFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
            value: MsgTransferONFT.encode(message).finish()
        };
    }
};
function createBaseMsgTransferONFTResponse() {
    return {};
}
export const MsgTransferONFTResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferONFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgTransferONFTResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferONFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransferONFTResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTransferONFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse",
            value: MsgTransferONFTResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBurnONFT() {
    return {
        id: "",
        denomId: "",
        sender: ""
    };
}
export const MsgBurnONFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnONFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBurnONFT();
        message.id = object.id ?? "";
        message.denomId = object.denomId ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            denomId: object.denom_id,
            sender: object.sender
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.denom_id = message.denomId;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBurnONFT.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBurnONFT.decode(message.value);
    },
    toProto(message) {
        return MsgBurnONFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
            value: MsgBurnONFT.encode(message).finish()
        };
    }
};
function createBaseMsgBurnONFTResponse() {
    return {};
}
export const MsgBurnONFTResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnONFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgBurnONFTResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBurnONFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBurnONFTResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBurnONFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse",
            value: MsgBurnONFTResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
