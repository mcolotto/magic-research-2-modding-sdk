import { GameState } from "../../../GameState";
import { Resource } from "../../../Resources";
import { SpellElement, SpellElementType } from "../../../spells/Elements";
import { Item, ItemParams } from "../../Item";
import { ItemTagEnum } from "../../ItemTagEnum";
import { TransmutationSpell } from "../TransmutationSpell";
declare class Cotton extends Item {
    getId(): string;
    getTags(): ItemTagEnum[];
    getPicture(): any;
    getBaseName(params: ItemParams): string;
    getDescription(state: GameState, params: ItemParams): string | undefined;
    getEffect(state: GameState, params: ItemParams): string | undefined;
    getBaseSalePrice(state: GameState, params: ItemParams): number;
}
export declare const cotton: Cotton;
declare class TransmuteCotton extends TransmutationSpell {
    getItem(): Item;
    getCraftingElementLevelRequirements(): Partial<Record<SpellElement, number>>;
    getCraftingMaterialsBase(state: GameState): {
        resources: Partial<Record<Resource, number>>;
        items: Record<string, number>;
    };
    getElement(): SpellElementType;
}
export declare const transmuteCotton: TransmuteCotton;
export {};
