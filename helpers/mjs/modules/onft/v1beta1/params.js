import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
    return {
        denomCreationFee: Coin.fromPartial({})
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomCreationFee !== undefined) {
            Coin.encode(message.denomCreationFee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomCreationFee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.denomCreationFee = object.denomCreationFee !== undefined && object.denomCreationFee !== null ? Coin.fromPartial(object.denomCreationFee) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denomCreationFee: object?.denom_creation_fee ? Coin.fromAmino(object.denom_creation_fee) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_creation_fee = message.denomCreationFee ? Coin.toAmino(message.denomCreationFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map