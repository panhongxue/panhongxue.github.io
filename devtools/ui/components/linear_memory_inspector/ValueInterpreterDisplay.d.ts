import { Endianness, ValueType, ValueTypeMode } from './ValueInterpreterDisplayUtils.js';
export interface ValueDisplayData {
    buffer: ArrayBuffer;
    valueTypes: Set<ValueType>;
    endianness: Endianness;
    memoryLength: number;
    valueTypeModes?: Map<ValueType, ValueTypeMode>;
}
export declare class ValueTypeModeChangedEvent extends Event {
    static readonly eventName = "valuetypemodechanged";
    data: {
        type: ValueType;
        mode: ValueTypeMode;
    };
    constructor(type: ValueType, mode: ValueTypeMode);
}
export declare class JumpToPointerAddressEvent extends Event {
    static readonly eventName = "jumptopointeraddress";
    data: number;
    constructor(address: number);
}
export declare class ValueInterpreterDisplay extends HTMLElement {
    static readonly litTagName: import("../../lit-html/static.js").Static;
    private readonly shadow;
    private endianness;
    private buffer;
    private valueTypes;
    private valueTypeModeConfig;
    private memoryLength;
    constructor();
    connectedCallback(): void;
    set data(data: ValueDisplayData);
    private render;
    private showValue;
    private renderPointerValue;
    private onJumpToAddressClicked;
    private renderNumberValues;
    private renderSignedAndUnsigned;
    private onValueTypeModeChange;
    private parse;
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-linear-memory-inspector-interpreter-display': ValueInterpreterDisplay;
    }
}
