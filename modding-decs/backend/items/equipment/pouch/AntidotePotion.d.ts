import { GameState } from "../../../GameState";
import { Resource } from "../../../Resources";
import { SpellElement, SpellElementType } from "../../../spells/Elements";
import { ItemParams } from "../../Item";
import { EquipmentTransmutationSpell } from "../../transmute/EquipmentTransmutationSpell";
import { EquippableItem } from "../EquippableItem";
import { PouchItem } from "../PouchItem";
declare class AntidotePotion extends PouchItem {
    getId(): string;
    getPicture(): any;
    getBaseName(params: ItemParams): string;
    getDescription(state: GameState, params: ItemParams): string | undefined;
    getEffect(state: GameState, params: ItemParams): string | undefined;
    getBaseSalePrice(state: GameState, params: ItemParams): number;
    doPouchItemEffect(state: GameState, params: ItemParams): GameState;
    shouldAutoUse(state: GameState, params: ItemParams): boolean;
    getUsesPerCombatBase(params: ItemParams): number;
}
export declare const antidotePotion: AntidotePotion;
declare class TransmuteAntidotePotion extends EquipmentTransmutationSpell {
    getItem(): EquippableItem;
    getCraftingElementLevelRequirements(): Partial<Record<SpellElement, number>>;
    getCraftingMaterialsBase(state: GameState): {
        resources: Partial<Record<Resource, number>>;
        items: Record<string, number>;
    };
    getElement(): SpellElementType;
}
export declare const transmuteAntidotePotion: TransmuteAntidotePotion;
export {};
