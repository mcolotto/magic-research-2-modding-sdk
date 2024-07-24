import { ActionArea, ActionSubcategory } from "../../action/ActionAreas";
import { GameState } from "../../GameState";
import { Resource, ResourceType } from "../../Resources";
import { SpellElement, SpellElementType } from "../../spells/Elements";
import { Building, BuildingSpell } from "../Building";
declare class EssenceStorage extends Building {
    getId(): string;
    getName(): string;
    perBuildingCapTags: (resource: any) => any[];
    perBuildingCapParams: (resource: any) => {
        resource: any;
    };
    getPerStorageBonusCap(state: GameState, resource: ResourceType): number;
    perBuildingCapExplanationParams: (resource: any) => {
        resource: any;
        unit: string;
    };
    getPerStorageBonusCapExplanation(state: GameState, resource: ResourceType): string;
    getDisplayDescription(state: GameState): string;
    _getDisplayEffectUncached(state: GameState): string;
    getDisplayEffect(state: GameState): string;
    getBaseLandRequired(): number;
    canTurnOff(): boolean;
}
declare const essenceStorage: EssenceStorage;
declare class BuildEssenceStorage extends BuildingSpell {
    getAreas(): Partial<Record<ActionArea, ActionSubcategory[]>>;
    getBuilding(): EssenceStorage;
    shouldNeverHaveDemolishBlockers(): boolean;
    getBaseResourceCost(): Partial<Record<Resource, number>>;
    getBaseResourceScale(): Partial<Record<Resource, number>>;
    getBaseManaCost(state: GameState): number;
    isVisible(state: GameState): boolean;
    getLevelRequirements(): Partial<Record<SpellElement, number>>;
    getElement(): SpellElementType;
    getBaseAlternateLandUnawareBuildingAmount(): number;
    getAlternateLandLowCostScaleMultiplier(): number;
}
declare const buildEssenceStorage: BuildEssenceStorage;
export declare function loadEssenceStorages(): void;
export { buildEssenceStorage, essenceStorage };
