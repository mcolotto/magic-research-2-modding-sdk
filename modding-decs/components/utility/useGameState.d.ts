import { MutableRefObject } from "react";
import { GameState, StateContextValue } from "../../backend/GameState";
export declare function updateGameState(newState: StateContextValue): void;
export declare function useGameState(): StateContextValue;
export declare function useGameStateWithRef(): [
    GameState,
    MutableRefObject<StateContextValue>
];
