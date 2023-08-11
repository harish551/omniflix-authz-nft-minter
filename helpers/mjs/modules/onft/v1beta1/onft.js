import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp } from "../../helpers";
function createBaseCollection() {
    return {
        denom: Denom.fromPartial({}),
        onfts: []
    };
}
export const Collection = {
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
        const message = createBaseCollection();
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
        const message = createBaseCollection();
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
        return Collection.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Collection.decode(message.value);
    },
    toProto(message) {
        return Collection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.Collection",
            value: Collection.encode(message).finish()
        };
    }
};
function createBaseIDCollection() {
    return {
        denomId: "",
        onftIds: []
    };
}
export const IDCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        for (const v of message.onftIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.onftIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIDCollection();
        message.denomId = object.denomId ?? "";
        message.onftIds = object.onftIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            denomId: object.denom_id,
            onftIds: Array.isArray(object?.onft_ids) ? object.onft_ids.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_id = message.denomId;
        if (message.onftIds) {
            obj.onft_ids = message.onftIds.map(e => e);
        }
        else {
            obj.onft_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return IDCollection.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IDCollection.decode(message.value);
    },
    toProto(message) {
        return IDCollection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.IDCollection",
            value: IDCollection.encode(message).finish()
        };
    }
};
function createBaseDenom() {
    return {
        id: "",
        symbol: "",
        name: "",
        schema: "",
        creator: "",
        description: "",
        previewUri: ""
    };
}
export const Denom = {
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
        if (message.schema !== "") {
            writer.uint32(34).string(message.schema);
        }
        if (message.creator !== "") {
            writer.uint32(42).string(message.creator);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(58).string(message.previewUri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenom();
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
                    message.schema = reader.string();
                    break;
                case 5:
                    message.creator = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.previewUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenom();
        message.id = object.id ?? "";
        message.symbol = object.symbol ?? "";
        message.name = object.name ?? "";
        message.schema = object.schema ?? "";
        message.creator = object.creator ?? "";
        message.description = object.description ?? "";
        message.previewUri = object.previewUri ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            symbol: object.symbol,
            name: object.name,
            schema: object.schema,
            creator: object.creator,
            description: object.description,
            previewUri: object.preview_uri
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.symbol = message.symbol;
        obj.name = message.name;
        obj.schema = message.schema;
        obj.creator = message.creator;
        obj.description = message.description;
        obj.preview_uri = message.previewUri;
        return obj;
    },
    fromAminoMsg(object) {
        return Denom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Denom.decode(message.value);
    },
    toProto(message) {
        return Denom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.Denom",
            value: Denom.encode(message).finish()
        };
    }
};
function createBaseONFT() {
    return {
        id: "",
        metadata: Metadata.fromPartial({}),
        data: "",
        owner: "",
        transferable: false,
        extensible: false,
        createdAt: new Date(),
        nsfw: false,
        royaltyShare: ""
    };
}
export const ONFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.transferable === true) {
            writer.uint32(40).bool(message.transferable);
        }
        if (message.extensible === true) {
            writer.uint32(48).bool(message.extensible);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.nsfw === true) {
            writer.uint32(64).bool(message.nsfw);
        }
        if (message.royaltyShare !== "") {
            writer.uint32(74).string(message.royaltyShare);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseONFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.data = reader.string();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.transferable = reader.bool();
                    break;
                case 6:
                    message.extensible = reader.bool();
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.nsfw = reader.bool();
                    break;
                case 9:
                    message.royaltyShare = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseONFT();
        message.id = object.id ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        message.data = object.data ?? "";
        message.owner = object.owner ?? "";
        message.transferable = object.transferable ?? false;
        message.extensible = object.extensible ?? false;
        message.createdAt = object.createdAt ?? undefined;
        message.nsfw = object.nsfw ?? false;
        message.royaltyShare = object.royaltyShare ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined,
            data: object.data,
            owner: object.owner,
            transferable: object.transferable,
            extensible: object.extensible,
            createdAt: object.created_at,
            nsfw: object.nsfw,
            royaltyShare: object.royalty_share
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        obj.data = message.data;
        obj.owner = message.owner;
        obj.transferable = message.transferable;
        obj.extensible = message.extensible;
        obj.created_at = message.createdAt;
        obj.nsfw = message.nsfw;
        obj.royalty_share = message.royaltyShare;
        return obj;
    },
    fromAminoMsg(object) {
        return ONFT.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ONFT.decode(message.value);
    },
    toProto(message) {
        return ONFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.ONFT",
            value: ONFT.encode(message).finish()
        };
    }
};
function createBaseMetadata() {
    return {
        name: "",
        description: "",
        mediaUri: "",
        previewUri: ""
    };
}
export const Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.mediaUri !== "") {
            writer.uint32(26).string(message.mediaUri);
        }
        if (message.previewUri !== "") {
            writer.uint32(34).string(message.previewUri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.mediaUri = reader.string();
                    break;
                case 4:
                    message.previewUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.mediaUri = object.mediaUri ?? "";
        message.previewUri = object.previewUri ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            description: object.description,
            mediaUri: object.media_uri,
            previewUri: object.preview_uri
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.description = message.description;
        obj.media_uri = message.mediaUri;
        obj.preview_uri = message.previewUri;
        return obj;
    },
    fromAminoMsg(object) {
        return Metadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Metadata.decode(message.value);
    },
    toProto(message) {
        return Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.Metadata",
            value: Metadata.encode(message).finish()
        };
    }
};
function createBaseOwner() {
    return {
        address: "",
        idCollections: []
    };
}
export const Owner = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.idCollections) {
            IDCollection.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.idCollections.push(IDCollection.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOwner();
        message.address = object.address ?? "";
        message.idCollections = object.idCollections?.map(e => IDCollection.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            idCollections: Array.isArray(object?.id_collections) ? object.id_collections.map((e) => IDCollection.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.idCollections) {
            obj.id_collections = message.idCollections.map(e => e ? IDCollection.toAmino(e) : undefined);
        }
        else {
            obj.id_collections = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Owner.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Owner.decode(message.value);
    },
    toProto(message) {
        return Owner.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.onft.v1beta1.Owner",
            value: Owner.encode(message).finish()
        };
    }
};
//# sourceMappingURL=onft.js.map