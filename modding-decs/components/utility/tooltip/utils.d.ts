import { LayoutRectangle } from "react-native";
type ChildrenMeasurement = {
    width: number;
    height: number;
    pageX: number;
    pageY: number;
};
type TooltipLayout = LayoutRectangle;
export type Measurement = {
    children: ChildrenMeasurement;
    tooltip: TooltipLayout;
    measured: boolean;
};
export declare const getTooltipPosition: ({ children, tooltip, measured, }: Measurement) => {} | {
    left: number;
    top: number;
};
export {};
