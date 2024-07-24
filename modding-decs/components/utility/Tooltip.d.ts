import { TooltipContent } from "./TooltipContext";
export declare const TooltipDisplay: () => any;
export declare enum TooltipPositionType {
    DEFAULT = "DEFAULT",
    LEFT_OF_ELEMENT = "LEFT_OF_ELEMENT",
    RIGHT_OF_ELEMENT = "RIGHT_OF_ELEMENT"
}
export declare const TooltipWrapper: (props: {
    children: any;
    tooltip: TooltipContent;
    tooltipId: string;
    tooltipPosition?: TooltipPositionType;
    containerStyle?: any;
}) => any;
