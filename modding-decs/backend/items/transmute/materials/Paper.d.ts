import { GameState } from "../../../GameState";
import { Resource } from "../../../Resources";
import { SpellElement, SpellElementType } from "../../../spells/Elements";
import { Item, ItemParams } from "../../Item";
import { ItemTagEnum, TransmutationCategory } from "../../ItemTagEnum";
import { TransmutationSpell } from "../TransmutationSpell";
declare class Paper extends Item {
    getId(): string;
    getTags(): ItemTagEnum[];
    getPicture(): any;
    getElement(): SpellElementType;
    getBaseName(params: ItemParams): string;
    getDescription(state: GameState, params: ItemParams): string | undefined;
    getEffect(state: GameState, params: ItemParams): string | undefined;
    getBaseSalePrice(state: GameState, params: ItemParams): number;
}
declare const paper: Paper;
declare class TransmutePaper extends TransmutationSpell {
    getItem(): Item;
    getCraftingElementLevelRequirements(): Partial<Record<SpellElement, number>>;
    canCraft(state: GameState): boolean;
    isVisible(state: GameState): boolean;
    getCraftingMaterialsBase(state: GameState): {
        resources: Partial<Record<Resource, number>>;
        items: Record<string, number>;
    };
    getElement(): SpellElementType;
    getTransmutationCategory(): TransmutationCategory;
}
declare const transmutePaper: TransmutePaper;
export { paper, transmutePaper };
