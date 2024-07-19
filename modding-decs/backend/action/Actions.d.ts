import { GameState } from "../GameState";
import { DataStore } from "../generic/DataStore";
import { Action } from "./Action";
import { ActionArea, ActionSubcategories } from "./ActionAreas";
export declare const Actions: DataStore<Action>;
export declare function getVisibleActionsForAreaBySubcategory(state: GameState, area: ActionArea): Partial<Record<ActionSubcategories, Action[]>>;
export declare function registerAction(action: Action): void;
export declare function getActionById(id: string): Action;
export declare function isAutoPurchaseUnlocked(state: GameState): boolean;
export declare const getAutoPurchaseActions: () => Action[];
export declare function loadActionsCommonLogic(): void;
