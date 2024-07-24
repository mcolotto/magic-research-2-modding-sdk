import React from "react";
import { ImageProps } from "react-native";
type IconProps = Omit<ImageProps, "source"> & {
    icon: string;
    small?: boolean;
};
declare function GameIconNonMemo(props: IconProps): JSX.Element;
declare const GameIcon: React.MemoExoticComponent<typeof GameIconNonMemo>;
export { GameIcon };
