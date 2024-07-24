import { ActionEffect } from "../../../action/Action";
import { GameState } from "../../../GameState";
import { Resource } from "../../../Resources";
import { SpellElement, SpellElementType } from "../../../spells/Elements";
import { ItemParams } from "../../Item";
import { EquipmentTransmutationSpell } from "../../transmute/EquipmentTransmutationSpell";
import { EquippableItem } from "../EquippableItem";
import { PouchItem } from "../PouchItem";
declare class HealthPotion extends PouchItem {
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
declare const healthPotion: HealthPotion;
declare class TransmuteHealthPotion extends EquipmentTransmutationSpell {
    getItem(): EquippableItem;
    getCraftingElementLevelRequirements(): Partial<Record<SpellElement, number>>;
    getCraftingMaterialsBase(state: GameState): {
        resources: Partial<Record<Resource, number>>;
        items: Record<string, number>;
    };
    getElement(): SpellElementType;
}
declare const transmuteHealthPotion: TransmuteHealthPotion;
export { healthPotion as HealthPotion, transmuteHealthPotion as TransmuteHealthPotion, };
