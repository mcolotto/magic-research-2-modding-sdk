import React from "react";
import type { ViewStyle } from "react-native";
import { ButtonProps } from "react-native-paper";
export declare function Button(props: Omit<Omit<ButtonProps, "onPress">, "children"> & {
    onPress: () => void;
    enableAutoRepress?: boolean;
    autoRepressConfig?: {
        minTimeMs?: number;
        startingThreshold?: number;
        startingRepressTime?: number;
        dropoffMultiplier?: number;
    };
    ButtonComponent?: React.ElementType;
    size?: number;
    TextComponent?: React.ElementType;
    children?: React.ReactNode;
    numberOfLines?: number | null;
    passthroughStyle?: ViewStyle;
    disableDisabledRenderingOptimization?: boolean;
}): JSX.Element;
