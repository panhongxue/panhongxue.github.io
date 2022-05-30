import * as Common from '../../core/common/common.js';
import type * as SDK from '../../core/sdk/sdk.js';
import type { AnimationImpl } from './AnimationModel.js';
import type { AnimationTimeline } from './AnimationTimeline.js';
export declare class AnimationUI {
    private animationInternal;
    private timeline;
    private readonly parentElement;
    private keyframes?;
    private nameElement;
    private readonly svg;
    private activeIntervalGroup;
    private cachedElements;
    private movementInMs;
    private keyboardMovementRateMs;
    private color;
    private node?;
    private delayLine?;
    private endDelayLine?;
    private tailGroup?;
    private mouseEventType?;
    private keyframeMoved?;
    private downMouseX?;
    constructor(animation: AnimationImpl, timeline: AnimationTimeline, parentElement: Element);
    static colorForAnimation(animation: AnimationImpl): string;
    static installDragHandleKeyboard(element: Element, elementDrag: (arg0: Event) => void): void;
    animation(): AnimationImpl;
    setNode(node: SDK.DOMModel.DOMNode | null): void;
    private createLine;
    private drawAnimationLine;
    private drawDelayLine;
    private drawPoint;
    private renderKeyframe;
    redraw(): void;
    private renderTransition;
    private renderIteration;
    private delay;
    private duration;
    private offset;
    private mouseDown;
    private mouseMove;
    private setMovementAndRedraw;
    private mouseUp;
    private keydownMove;
    private onContextMenu;
}
export declare const enum Events {
    AnimationDrag = "AnimationDrag",
    KeyframeMove = "KeyframeMove",
    StartEndpointMove = "StartEndpointMove",
    FinishEndpointMove = "FinishEndpointMove"
}
export declare const Options: {
    AnimationHeight: number;
    AnimationSVGHeight: number;
    AnimationMargin: number;
    EndpointsClickRegionSize: number;
    GridCanvasHeight: number;
};
export declare const Colors: Map<string, Common.Color.Color | null>;
