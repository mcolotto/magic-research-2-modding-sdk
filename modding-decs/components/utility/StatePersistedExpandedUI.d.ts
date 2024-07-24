import { StateContextValue } from "../../backend/GameState";
export declare function useExpandedUIFromContext(state: StateContextValue, key: string, defaultValue: boolean): [boolean, (value: boolean) => void];
