import { ReactNode } from "react";
import { CardProps } from "react-native-paper";
export declare function Card(props: Omit<CardProps, "elevation"> & {
    children?: ReactNode;
}): JSX.Element;
