/// <reference types="react" />
import { StyleProp } from "react-native";
export type PickerData = {
    key: string;
    label: string;
    value: string;
};
export declare function Picker(props: {
    selectedValue: string;
    onValueChange: (itemValue: string, itemIndex: number) => void;
    data: PickerData[];
    disablePlaceholder?: boolean;
    maxLength?: number;
    style?: StyleProp<any>;
}): JSX.Element;
