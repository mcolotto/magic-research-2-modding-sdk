import React from "react";
import { KeyboardTypeOptions } from "react-native";
import { TextProps } from "react-native-paper";
export declare const createNumericValidatorFunction: (minValue: number, maxValue: number, intOnly: boolean) => (value: string) => string;
export type InputModalProps = {
    visible: boolean;
    onDismiss: () => void;
    value: string;
    onSelect: (value: string) => void;
    validate: (value: string) => string | null;
    keyboardType?: KeyboardTypeOptions;
};
declare function InputModalUnmemoized(props: InputModalProps): JSX.Element;
export declare const InputModal: React.MemoExoticComponent<typeof InputModalUnmemoized>;
export declare function TextWithInputModal(props: {
    value: string;
    onSelect: (value: string) => void;
    validate: (value: string) => string | null;
    keyboardType?: KeyboardTypeOptions;
} & TextProps<Text>): JSX.Element;
export {};
