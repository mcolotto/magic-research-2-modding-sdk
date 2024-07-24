import { ActionEffect } from "../../../action/Action";
import { AttackTarget } from "../../../exploration/AttackTarget";
import { GameState } from "../../../GameState";
import { Resource } from "../../../Resources";
import { SpellElement, SpellElementType } from "../../../spells/Elements";
import { TemporaryEffect } from "../../../temporaryeffects/TemporaryEffect";
import { ItemParams } from "../../Item";
import { EquipmentTransmutationSpell } from "../../transmute/EquipmentTransmutationSpell";
import { EquippableItem } from "../EquippableItem";
import { BuffingPouchItem } from "./BuffingPouchItem";
declare class VenomousBrew extends BuffingPouchItem {
    getId(): string;
    getBaseName(params: ItemParams): string;
    getPicture(): any;
    getTemporaryEffect(): TemporaryEffect;
    getTarget(): AttackTarget;
    getDescription(state: GameState, params: ItemParams): string | undefined;
    protected getBaseItemEffects(): Record<string, ActionEffect>;
    getEffect(state: GameState, params: ItemParams): string | undefined;
    getBaseSalePrice(state: GameState, params: ItemParams): number;
    getUsesPerCombatBase(params: ItemParams): number;
    shouldCombineUnderAutoCombineAll(): boolean;
}
export declare const venomousBrew: VenomousBrew;
declare class TransmuteVenomousBrew extends EquipmentTransmutationSpell {
    getItem(): EquippableItem;
    getCraftingElementLevelRequirements(): Partial<Record<SpellElement, number>>;
    getCraftingMaterialsBase(state: GameState): {
        resources: Partial<Record<Resource, number>>;
        items: Record<string, number>;
    };
    getElement(): SpellElementType;
}
export declare const transmuteVenomousBrew: TransmuteVenomousBrew;
export {};
