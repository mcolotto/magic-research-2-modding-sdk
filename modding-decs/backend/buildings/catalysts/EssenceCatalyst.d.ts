import { ActionArea, ActionSubcategory } from "../../action/ActionAreas";
import { GameState } from "../../GameState";
import { Resource } from "../../Resources";
import { SpellElement, SpellElementType } from "../../spells/Elements";
import { TransformationValueType } from "../../transformation/TransformationTags";
import { Building, BuildingSpell } from "../Building";
declare class EssenceCatalyst extends Building {
    getId(): string;
    getName(): string;
    catalystTags: () => string[];
    getPerCatalystBonusMultiplier(state: GameState): number;
    catalystEffectivityParams: {
        valueType: TransformationValueType;
    };
    getPerCatalystBonusMultiplierExplanation(state: GameState): string;
    getDisplayDescription(state: GameState): string;
    getDisplayEffect(state: GameState): string;
    getBaseLandRequired(): number;
    canTurnOff(): boolean;
}
declare const essenceCatalyst: EssenceCatalyst;
declare class BuildEssenceCatalyst extends BuildingSpell {
    getAreas(): Partial<Record<ActionArea, ActionSubcategory[]>>;
    getBuilding(): EssenceCatalyst;
    getBaseResourceCost(): Partial<Record<Resource, number>>;
    getBaseResourceScale(): Partial<Record<Resource, number>>;
    getBaseManaCost(state: GameState): number;
    isVisible(state: GameState): boolean;
    getLevelRequirements(): Partial<Record<SpellElement, number>>;
    getElement(): SpellElementType;
    getBaseAlternateLandUnawareBuildingAmount(): number;
}
declare const buildEssenceCatalyst: BuildEssenceCatalyst;
export declare function loadEssenceCatalysts(): void;
export { buildEssenceCatalyst, essenceCatalyst };
