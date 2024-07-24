import { GameState, GameStateTransform } from "../GameState";
import { DataStore } from "../generic/DataStore";
export declare const GameStartupListeners: DataStore<GameStateTransform>;
export declare function runGameStartupListeners(state: GameState): GameState;
