import { GameState, GameStateTransform } from "./GameState";
import { DataStore } from "./generic/DataStore";
export declare function hasFlag(state: GameState, flag: string): boolean;
export declare const SetFlagListeners: DataStore<(state: GameState, flag: string) => GameState>;
export declare function hasEverHadFlag(state: GameState, flag: string): boolean;
export declare const setFlag: (flag: string) => any;
export declare const clearFlag: (flag: string) => any;
export declare function setWorldFlagForNextRunImpl(flag: string, state: GameState): GameState;
export declare const setWorldFlagForNextRun: (flag: string) => any;
export declare function setWorldFlagImpl(flag: string, state: GameState): GameState;
export declare const setWorldFlag: (flag: string) => any;
export declare function clearWorldFlag(this: any, flag: string): GameStateTransform;
export declare function hasWorldFlag(state: GameState, flag: string): boolean;
export declare function hasWorldFlagIncludingNextRun(state: GameState, flag: string): boolean;
export declare function setCombatVariable(this: any, variable: string, value: any): GameStateTransform;
export declare function clearCombatVariable(this: any, variable: string): GameStateTransform;
export declare function resetAllCombatVariables(state: GameState): GameState;
export declare function getCombatVariable(state: GameState, variable: string): any;
