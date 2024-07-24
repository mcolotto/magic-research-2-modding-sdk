import React from "react";
export type TooltipPosition = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    containerWidth: number;
};
export type TooltipContent = React.ReactNode | undefined;
export type TooltipContextValue = {
    tooltip: TooltipContent;
    position: TooltipPosition;
};
export type TooltipControlContextValue = {
    setTooltip: (id: string, tooltip: TooltipContent, position: TooltipPosition, measurementId?: number) => void;
    clearTooltip: (id: string) => void;
    onMouseLeave: (id: string) => void;
    onMouseEnter: (id: string, measurementId: number) => void;
    onUnmountTooltip: (id: string) => void;
};
export declare const TooltipContext: React.Context<TooltipContextValue>;
export declare const EMPTY_TOOLTIP_CONTEXT: {
    tooltip: any;
    position: {
        containerWidth: number;
    };
};
export declare const TooltipControlContext: React.Context<TooltipControlContextValue>;
