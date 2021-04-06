// @generated by protobuf-ts 2.0.0-alpha.17 with parameters long_type_string
// @generated from protobuf file "msg-scalar.proto" (package "spec", syntax proto3)
// tslint:disable
import { BinaryWriteOptions } from "@protobuf-ts/runtime";
import { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import { BinaryReadOptions } from "@protobuf-ts/runtime";
import { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message spec.ScalarValuesMessage
 */
export interface ScalarValuesMessage {
    /**
     * @generated from protobuf field: double double_field = 1;
     */
    doubleField: number;
    /**
     * @generated from protobuf field: float float_field = 2;
     */
    floatField: number;
    /**
     * @generated from protobuf field: int64 int64_field = 3;
     */
    int64Field: string;
    /**
     * @generated from protobuf field: uint64 uint64_field = 4;
     */
    uint64Field: string;
    /**
     * @generated from protobuf field: int32 int32_field = 5;
     */
    int32Field: number;
    /**
     * @generated from protobuf field: fixed64 fixed64_field = 6;
     */
    fixed64Field: string;
    /**
     * @generated from protobuf field: fixed32 fixed32_field = 7;
     */
    fixed32Field: number;
    /**
     * @generated from protobuf field: bool bool_field = 8;
     */
    boolField: boolean;
    /**
     * @generated from protobuf field: string string_field = 9;
     */
    stringField: string;
    /**
     * @generated from protobuf field: bytes bytes_field = 11;
     */
    bytesField: Uint8Array;
    /**
     * @generated from protobuf field: uint32 uint32_field = 12;
     */
    uint32Field: number;
    /**
     * @generated from protobuf field: sfixed32 sfixed32_field = 14;
     */
    sfixed32Field: number;
    /**
     * @generated from protobuf field: sfixed64 sfixed64_field = 15;
     */
    sfixed64Field: string;
    /**
     * @generated from protobuf field: sint32 sint32_field = 16;
     */
    sint32Field: number;
    /**
     * @generated from protobuf field: sint64 sint64_field = 17;
     */
    sint64Field: string;
}
/**
 * @generated from protobuf message spec.RepeatedScalarValuesMessage
 */
export interface RepeatedScalarValuesMessage {
    /**
     * @generated from protobuf field: repeated double double_field = 1;
     */
    doubleField: number[];
    /**
     * @generated from protobuf field: repeated float float_field = 2;
     */
    floatField: number[];
    /**
     * @generated from protobuf field: repeated int64 int64_field = 3;
     */
    int64Field: string[];
    /**
     * @generated from protobuf field: repeated uint64 uint64_field = 4;
     */
    uint64Field: string[];
    /**
     * @generated from protobuf field: repeated int32 int32_field = 5;
     */
    int32Field: number[];
    /**
     * @generated from protobuf field: repeated fixed64 fixed64_field = 6;
     */
    fixed64Field: string[];
    /**
     * @generated from protobuf field: repeated fixed32 fixed32_field = 7;
     */
    fixed32Field: number[];
    /**
     * @generated from protobuf field: repeated bool bool_field = 8;
     */
    boolField: boolean[];
    /**
     * @generated from protobuf field: repeated string string_field = 9;
     */
    stringField: string[];
    /**
     * @generated from protobuf field: repeated bytes bytes_field = 11;
     */
    bytesField: Uint8Array[];
    /**
     * @generated from protobuf field: repeated uint32 uint32_field = 12;
     */
    uint32Field: number[];
    /**
     * @generated from protobuf field: repeated sfixed32 sfixed32_field = 14;
     */
    sfixed32Field: number[];
    /**
     * @generated from protobuf field: repeated sfixed64 sfixed64_field = 15;
     */
    sfixed64Field: string[];
    /**
     * @generated from protobuf field: repeated sint32 sint32_field = 16;
     */
    sint32Field: number[];
    /**
     * @generated from protobuf field: repeated sint64 sint64_field = 17;
     */
    sint64Field: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ScalarValuesMessage$Type extends MessageType<ScalarValuesMessage> {
    constructor() {
        super("spec.ScalarValuesMessage", [
            { no: 1, name: "double_field", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 2, name: "float_field", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "int64_field", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "uint64_field", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 5, name: "int32_field", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "fixed64_field", kind: "scalar", T: 6 /*ScalarType.FIXED64*/ },
            { no: 7, name: "fixed32_field", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 8, name: "bool_field", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "string_field", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "bytes_field", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 12, name: "uint32_field", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "sfixed32_field", kind: "scalar", T: 15 /*ScalarType.SFIXED32*/ },
            { no: 15, name: "sfixed64_field", kind: "scalar", T: 16 /*ScalarType.SFIXED64*/ },
            { no: 16, name: "sint32_field", kind: "scalar", T: 17 /*ScalarType.SINT32*/ },
            { no: 17, name: "sint64_field", kind: "scalar", T: 18 /*ScalarType.SINT64*/ }
        ]);
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ScalarValuesMessage): ScalarValuesMessage {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double double_field */ 1:
                    message.doubleField = reader.double();
                    break;
                case /* float float_field */ 2:
                    message.floatField = reader.float();
                    break;
                case /* int64 int64_field */ 3:
                    message.int64Field = reader.int64().toString();
                    break;
                case /* uint64 uint64_field */ 4:
                    message.uint64Field = reader.uint64().toString();
                    break;
                case /* int32 int32_field */ 5:
                    message.int32Field = reader.int32();
                    break;
                case /* fixed64 fixed64_field */ 6:
                    message.fixed64Field = reader.fixed64().toString();
                    break;
                case /* fixed32 fixed32_field */ 7:
                    message.fixed32Field = reader.fixed32();
                    break;
                case /* bool bool_field */ 8:
                    message.boolField = reader.bool();
                    break;
                case /* string string_field */ 9:
                    message.stringField = reader.string();
                    break;
                case /* bytes bytes_field */ 11:
                    message.bytesField = reader.bytes();
                    break;
                case /* uint32 uint32_field */ 12:
                    message.uint32Field = reader.uint32();
                    break;
                case /* sfixed32 sfixed32_field */ 14:
                    message.sfixed32Field = reader.sfixed32();
                    break;
                case /* sfixed64 sfixed64_field */ 15:
                    message.sfixed64Field = reader.sfixed64().toString();
                    break;
                case /* sint32 sint32_field */ 16:
                    message.sint32Field = reader.sint32();
                    break;
                case /* sint64 sint64_field */ 17:
                    message.sint64Field = reader.sint64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ScalarValuesMessage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double double_field = 1; */
        if (message.doubleField !== 0)
            writer.tag(1, WireType.Bit64).double(message.doubleField);
        /* float float_field = 2; */
        if (message.floatField !== 0)
            writer.tag(2, WireType.Bit32).float(message.floatField);
        /* int64 int64_field = 3; */
        if (message.int64Field !== "0")
            writer.tag(3, WireType.Varint).int64(message.int64Field);
        /* uint64 uint64_field = 4; */
        if (message.uint64Field !== "0")
            writer.tag(4, WireType.Varint).uint64(message.uint64Field);
        /* int32 int32_field = 5; */
        if (message.int32Field !== 0)
            writer.tag(5, WireType.Varint).int32(message.int32Field);
        /* fixed64 fixed64_field = 6; */
        if (message.fixed64Field !== "0")
            writer.tag(6, WireType.Bit64).fixed64(message.fixed64Field);
        /* fixed32 fixed32_field = 7; */
        if (message.fixed32Field !== 0)
            writer.tag(7, WireType.Bit32).fixed32(message.fixed32Field);
        /* bool bool_field = 8; */
        if (message.boolField !== false)
            writer.tag(8, WireType.Varint).bool(message.boolField);
        /* string string_field = 9; */
        if (message.stringField !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.stringField);
        /* bytes bytes_field = 11; */
        if (message.bytesField.length)
            writer.tag(11, WireType.LengthDelimited).bytes(message.bytesField);
        /* uint32 uint32_field = 12; */
        if (message.uint32Field !== 0)
            writer.tag(12, WireType.Varint).uint32(message.uint32Field);
        /* sfixed32 sfixed32_field = 14; */
        if (message.sfixed32Field !== 0)
            writer.tag(14, WireType.Bit32).sfixed32(message.sfixed32Field);
        /* sfixed64 sfixed64_field = 15; */
        if (message.sfixed64Field !== "0")
            writer.tag(15, WireType.Bit64).sfixed64(message.sfixed64Field);
        /* sint32 sint32_field = 16; */
        if (message.sint32Field !== 0)
            writer.tag(16, WireType.Varint).sint32(message.sint32Field);
        /* sint64 sint64_field = 17; */
        if (message.sint64Field !== "0")
            writer.tag(17, WireType.Varint).sint64(message.sint64Field);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.ScalarValuesMessage
 */
export const ScalarValuesMessage = new ScalarValuesMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RepeatedScalarValuesMessage$Type extends MessageType<RepeatedScalarValuesMessage> {
    constructor() {
        super("spec.RepeatedScalarValuesMessage", [
            { no: 1, name: "double_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 2, name: "float_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "int64_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "uint64_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/ },
            { no: 5, name: "int32_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "fixed64_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 6 /*ScalarType.FIXED64*/ },
            { no: 7, name: "fixed32_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 7 /*ScalarType.FIXED32*/ },
            { no: 8, name: "bool_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "string_field", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "bytes_field", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ },
            { no: 12, name: "uint32_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "sfixed32_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 15 /*ScalarType.SFIXED32*/ },
            { no: 15, name: "sfixed64_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 16 /*ScalarType.SFIXED64*/ },
            { no: 16, name: "sint32_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
            { no: 17, name: "sint64_field", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 18 /*ScalarType.SINT64*/ }
        ]);
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RepeatedScalarValuesMessage): RepeatedScalarValuesMessage {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated double double_field */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.doubleField.push(reader.double());
                    else
                        message.doubleField.push(reader.double());
                    break;
                case /* repeated float float_field */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.floatField.push(reader.float());
                    else
                        message.floatField.push(reader.float());
                    break;
                case /* repeated int64 int64_field */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.int64Field.push(reader.int64().toString());
                    else
                        message.int64Field.push(reader.int64().toString());
                    break;
                case /* repeated uint64 uint64_field */ 4:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uint64Field.push(reader.uint64().toString());
                    else
                        message.uint64Field.push(reader.uint64().toString());
                    break;
                case /* repeated int32 int32_field */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.int32Field.push(reader.int32());
                    else
                        message.int32Field.push(reader.int32());
                    break;
                case /* repeated fixed64 fixed64_field */ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fixed64Field.push(reader.fixed64().toString());
                    else
                        message.fixed64Field.push(reader.fixed64().toString());
                    break;
                case /* repeated fixed32 fixed32_field */ 7:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fixed32Field.push(reader.fixed32());
                    else
                        message.fixed32Field.push(reader.fixed32());
                    break;
                case /* repeated bool bool_field */ 8:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.boolField.push(reader.bool());
                    else
                        message.boolField.push(reader.bool());
                    break;
                case /* repeated string string_field */ 9:
                    message.stringField.push(reader.string());
                    break;
                case /* repeated bytes bytes_field */ 11:
                    message.bytesField.push(reader.bytes());
                    break;
                case /* repeated uint32 uint32_field */ 12:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uint32Field.push(reader.uint32());
                    else
                        message.uint32Field.push(reader.uint32());
                    break;
                case /* repeated sfixed32 sfixed32_field */ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sfixed32Field.push(reader.sfixed32());
                    else
                        message.sfixed32Field.push(reader.sfixed32());
                    break;
                case /* repeated sfixed64 sfixed64_field */ 15:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sfixed64Field.push(reader.sfixed64().toString());
                    else
                        message.sfixed64Field.push(reader.sfixed64().toString());
                    break;
                case /* repeated sint32 sint32_field */ 16:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sint32Field.push(reader.sint32());
                    else
                        message.sint32Field.push(reader.sint32());
                    break;
                case /* repeated sint64 sint64_field */ 17:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sint64Field.push(reader.sint64().toString());
                    else
                        message.sint64Field.push(reader.sint64().toString());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RepeatedScalarValuesMessage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated double double_field = 1; */
        if (message.doubleField.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.doubleField.length; i++)
                writer.double(message.doubleField[i]);
            writer.join();
        }
        /* repeated float float_field = 2; */
        if (message.floatField.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.floatField.length; i++)
                writer.float(message.floatField[i]);
            writer.join();
        }
        /* repeated int64 int64_field = 3; */
        if (message.int64Field.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.int64Field.length; i++)
                writer.int64(message.int64Field[i]);
            writer.join();
        }
        /* repeated uint64 uint64_field = 4; */
        if (message.uint64Field.length) {
            writer.tag(4, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uint64Field.length; i++)
                writer.uint64(message.uint64Field[i]);
            writer.join();
        }
        /* repeated int32 int32_field = 5; */
        if (message.int32Field.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.int32Field.length; i++)
                writer.int32(message.int32Field[i]);
            writer.join();
        }
        /* repeated fixed64 fixed64_field = 6; */
        if (message.fixed64Field.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fixed64Field.length; i++)
                writer.fixed64(message.fixed64Field[i]);
            writer.join();
        }
        /* repeated fixed32 fixed32_field = 7; */
        if (message.fixed32Field.length) {
            writer.tag(7, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fixed32Field.length; i++)
                writer.fixed32(message.fixed32Field[i]);
            writer.join();
        }
        /* repeated bool bool_field = 8; */
        if (message.boolField.length) {
            writer.tag(8, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.boolField.length; i++)
                writer.bool(message.boolField[i]);
            writer.join();
        }
        /* repeated string string_field = 9; */
        for (let i = 0; i < message.stringField.length; i++)
            writer.tag(9, WireType.LengthDelimited).string(message.stringField[i]);
        /* repeated bytes bytes_field = 11; */
        for (let i = 0; i < message.bytesField.length; i++)
            writer.tag(11, WireType.LengthDelimited).bytes(message.bytesField[i]);
        /* repeated uint32 uint32_field = 12; */
        if (message.uint32Field.length) {
            writer.tag(12, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uint32Field.length; i++)
                writer.uint32(message.uint32Field[i]);
            writer.join();
        }
        /* repeated sfixed32 sfixed32_field = 14; */
        if (message.sfixed32Field.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sfixed32Field.length; i++)
                writer.sfixed32(message.sfixed32Field[i]);
            writer.join();
        }
        /* repeated sfixed64 sfixed64_field = 15; */
        if (message.sfixed64Field.length) {
            writer.tag(15, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sfixed64Field.length; i++)
                writer.sfixed64(message.sfixed64Field[i]);
            writer.join();
        }
        /* repeated sint32 sint32_field = 16; */
        if (message.sint32Field.length) {
            writer.tag(16, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sint32Field.length; i++)
                writer.sint32(message.sint32Field[i]);
            writer.join();
        }
        /* repeated sint64 sint64_field = 17; */
        if (message.sint64Field.length) {
            writer.tag(17, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sint64Field.length; i++)
                writer.sint64(message.sint64Field[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.RepeatedScalarValuesMessage
 */
export const RepeatedScalarValuesMessage = new RepeatedScalarValuesMessage$Type();
