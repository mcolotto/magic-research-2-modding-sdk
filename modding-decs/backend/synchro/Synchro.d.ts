import { GameState, GameStateTransform, SynchroStrategyState } from "../GameState";
import { DataStore } from "../generic/DataStore";
import { SpellElementType } from "../spells/Elements";
import { SynchroBonus } from "./SynchroBonus";
export declare const SYNCHRO_ROWS = 3;
export declare const SYNCHRO_COLS = 3;
export declare const SYNCHRO_GRID_AMOUNT = 8;
export declare function isSynchroUnlocked(state: GameState): boolean;
export declare function getCurrentSynchroStrategy(state: GameState): SynchroStrategyState;
export declare function setCurrentSynchroGrid(state: GameState, gridIndex: number): GameState;
export declare function getSynchroPosition(state: GameState, x: number, y: number, strategy?: SynchroStrategyState): SpellElementType | undefined;
export declare const SynchroChangeListeners: DataStore<GameStateTransform>;
export declare function setCurrentSynchroPosition(state: GameState, x: number, y: number, element: SpellElementType | undefined): GameState;
export declare function clearSynchroBoard(state: GameState): GameState;
export declare function getCurrentSynchroBonuses(state: GameState, element1: SpellElementType, element2: SpellElementType): number;
export declare function getSortedSynchroBonuses(state: GameState): {
    bonus: SynchroBonus;
    amount: number;
}[];
export declare function getTotalOccurrencesInSynchroGrid(state: GameState, element: SpellElementType): number;
export declare function calculateMaxOccurrencesInSynchroGrid(state: GameState, element: SpellElementType): number;
declare function findSynchroBonusForElementsUncached(element1: SpellElementType, element2: SpellElementType): SynchroBonus | undefined;
export declare const findSynchroBonusForElements: typeof findSynchroBonusForElementsUncached;
export declare function hasNegativeSynchroBonusOnTile(state: GameState, x: number, y: number): boolean;
export declare function loadSynchroBase(): void;
export {};
