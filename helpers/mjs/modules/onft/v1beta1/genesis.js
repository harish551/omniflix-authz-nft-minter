import { Collection } from "./onft";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        collections: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.collections) {
            Collection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collections.push(Collection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            collections: Array.isArray(object?.collections) ? object.collections.map((e) => Collection.fromAmino(e)) : [],
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.collections) {
            obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
        }
        else {
            obj.collections = [];
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map