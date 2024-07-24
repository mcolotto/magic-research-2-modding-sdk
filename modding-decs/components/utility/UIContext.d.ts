import React from "react";
import { StateContextValue } from "../../backend/GameState";
export type UIContextValue = {
    getUIState: (id: string) => any;
    setUIState: (id: string, value: any) => void;
};
export declare const UIContext: React.Context<UIContextValue>;
export declare function useUIStateFromContext<T>(context: UIContextValue, key: string, initialValue: T): [T, (value: T) => void];
export declare function useUIStateFromGameState<T>(contextRef: React.RefObject<StateContextValue>, key: string, initialValue: T): [T, (value: T) => void];
