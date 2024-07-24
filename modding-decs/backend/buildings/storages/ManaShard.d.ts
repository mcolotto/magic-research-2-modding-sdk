import { ActionArea, ActionSubcategory } from "../../action/ActionAreas";
import { GameState } from "../../GameState";
import { Resource } from "../../Resources";
import { SpellElement, SpellElementType } from "../../spells/Elements";
import { Building, BuildingSpell } from "../Building";
declare class ManaShard extends Building {
    getId(): string;
    getName(): string;
    getDisplayDescription(state: GameState): string;
    getDisplayEffect(state: GameState): string;
    getBaseLandRequired(): number;
    canTurnOff(): boolean;
}
declare const manaShard: ManaShard;
declare class BuildManaShard extends BuildingSpell {
    getAreas(): Partial<Record<ActionArea, ActionSubcategory[]>>;
    getBuilding(): Building;
    shouldNeverHaveDemolishBlockers(): boolean;
    getBaseResourceCost(): Partial<Record<Resource, number>>;
    getBaseResourceScale(): Partial<Record<Resource, number>>;
    getBaseManaCost(state: GameState): number;
    isVisible(state: GameState): boolean;
    getLevelRequirements(): Partial<Record<SpellElement, number>>;
    getElement(): SpellElementType;
    getBaseAlternateLandUnawareBuildingAmount(): number;
}
declare const buildManaShard: BuildManaShard;
export { buildManaShard as BuildManaShard, manaShard as ManaShard };
