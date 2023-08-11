import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Collection, Denom, ONFT } from "./onft";
import { Params } from "./params";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryCollectionRequest() {
    return {
        denomId: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryCollectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionRequest();
        message.denomId = object.denomId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denomId: object.denom_id,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCollectionRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCollectionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCollectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest",
            value: QueryCollectionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCollectionResponse() {
    return {
        collection: Collection.fromPartial({}),
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryCollectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collection !== undefined) {
            Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection = Collection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionResponse();
        message.collection = object.collection !== undefined && object.collection !== null ? Collection.fromPartial(object.collection) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            collection: object?.collection ? Collection.fromAmino(object.collection) : undefined,
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.collection = message.collection ? Collection.toAmino(message.collection) : undefined;
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCollectionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCollectionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCollectionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse",
            value: QueryCollectionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomRequest() {
    return {
        denomId: ""
    };
}
export const QueryDenomRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomRequest();
        message.denomId = object.denomId ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denomId: object.denom_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest",
            value: QueryDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomResponse() {
    return {
        denom: Denom.fromPartial({})
    };
}
export const QueryDenomResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== undefined) {
            Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = Denom.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomResponse();
        message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denom: object?.denom ? Denom.fromAmino(object.denom) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse",
            value: QueryDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsRequest() {
    return {
        pagination: PageRequest.fromPartial({}),
        owner: ""
    };
}
export const QueryDenomsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest",
            value: QueryDenomsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsResponse() {
    return {
        denoms: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDenomsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denoms) {
            Denom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(Denom.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsResponse();
        message.denoms = object.denoms?.map(e => Denom.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denoms: Array.isArray(object?.denoms) ? object.denoms.map((e) => Denom.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e ? Denom.toAmino(e) : undefined);
        }
        else {
            obj.denoms = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse",
            value: QueryDenomsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryONFTRequest() {
    return {
        denomId: "",
        id: ""
    };
}
export const QueryONFTRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryONFTRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryONFTRequest();
        message.denomId = object.denomId ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denomId: object.denom_id,
            id: object.id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId;
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryONFTRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryONFTRequest.decode(message.value);
    },
    toProto(message) {
        return QueryONFTRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest",
            value: QueryONFTRequest.encode(message).finish()
        };
    }
};
function createBaseQueryONFTResponse() {
    return {
        onft: ONFT.fromPartial({})
    };
}
export const QueryONFTResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.onft !== undefined) {
            ONFT.encode(message.onft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryONFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.onft = ONFT.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryONFTResponse();
        message.onft = object.onft !== undefined && object.onft !== null ? ONFT.fromPartial(object.onft) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            onft: object?.onft ? ONFT.fromAmino(object.onft) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.onft = message.onft ? ONFT.toAmino(message.onft) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryONFTResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryONFTResponse.decode(message.value);
    },
    toProto(message) {
        return QueryONFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse",
            value: QueryONFTResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOwnerONFTsRequest() {
    return {
        denomId: "",
        owner: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryOwnerONFTsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerONFTsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerONFTsRequest();
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denomId: object.denom_id,
            owner: object.owner,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId;
        obj.owner = message.owner;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOwnerONFTsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOwnerONFTsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOwnerONFTsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest",
            value: QueryOwnerONFTsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOwnerONFTsResponse() {
    return {
        owner: "",
        collections: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryOwnerONFTsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.collections) {
            OwnerONFTCollection.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerONFTsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collections.push(OwnerONFTCollection.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerONFTsResponse();
        message.owner = object.owner ?? "";
        message.collections = object.collections?.map(e => OwnerONFTCollection.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            collections: Array.isArray(object?.collections) ? object.collections.map((e) => OwnerONFTCollection.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        if (message.collections) {
            obj.collections = message.collections.map(e => e ? OwnerONFTCollection.toAmino(e) : undefined);
        }
        else {
            obj.collections = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOwnerONFTsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOwnerONFTsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOwnerONFTsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse",
            value: QueryOwnerONFTsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyRequest() {
    return {
        denomId: "",
        owner: ""
    };
}
export const QuerySupplyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyRequest();
        message.denomId = object.denomId ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denomId: object.denom_id,
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest",
            value: QuerySupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyResponse() {
    return {
        amount: Long.UZERO
    };
}
export const QuerySupplyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            amount: Long.fromString(object.amount)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySupplyResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse",
            value: QuerySupplyResponse.encode(message).finish()
        };
    }
};
function createBaseOwnerONFTCollection() {
    return {
        denom: Denom.fromPartial({}),
        onfts: []
    };
}
export const OwnerONFTCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== undefined) {
            Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.onfts) {
            ONFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwnerONFTCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = Denom.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.onfts.push(ONFT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOwnerONFTCollection();
        message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
        message.onfts = object.onfts?.map(e => ONFT.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            denom: object?.denom ? Denom.fromAmino(object.denom) : undefined,
            onfts: Array.isArray(object?.onfts) ? object.onfts.map((e) => ONFT.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
        if (message.onfts) {
            obj.onfts = message.onfts.map(e => e ? ONFT.toAmino(e) : undefined);
        }
        else {
            obj.onfts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return OwnerONFTCollection.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OwnerONFTCollection.decode(message.value);
    },
    toProto(message) {
        return OwnerONFTCollection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection",
            value: OwnerONFTCollection.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map