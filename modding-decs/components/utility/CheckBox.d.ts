import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export declare function CheckBox(props: {
    title: string | React.ReactNode;
    checked: boolean;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
}): JSX.Element;
