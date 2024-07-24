import { ActionEffect } from "../../../action/Action";
import { GameState } from "../../../GameState";
import { ItemParams } from "../../Item";
import { PouchItem } from "../PouchItem";
declare class Cherry extends PouchItem {
    getId(): string;
    getPicture(): any;
    getBaseName(params: ItemParams): string;
    getDescription(state: GameState, params: ItemParams): string | undefined;
    hpHealTags: any[];
    protected getBaseExtraItemEffects(params: ItemParams): Record<string, ActionEffect>;
    getHPHealAmount(state: GameState, params: ItemParams): number;
    getEffect(state: GameState, params: ItemParams): string;
    getBaseSalePrice(state: GameState, params: ItemParams): number;
    doPouchItemEffect(state: GameState, params: ItemParams): GameState;
    shouldAutoUse(state: GameState, params: ItemParams): boolean;
    getUsesPerCombatBase(params: ItemParams): number;
}
declare const cherry: Cherry;
export { cherry as Cherry };
