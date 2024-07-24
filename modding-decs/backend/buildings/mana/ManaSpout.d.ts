import { ActionArea, ActionSubcategory } from "../../action/ActionAreas";
import { GameState } from "../../GameState";
import { Resource } from "../../Resources";
import { SpellElement, SpellElementType } from "../../spells/Elements";
import { Building, BuildingSpell } from "../Building";
declare class ManaSpout extends Building {
    getId(): string;
    getName(): string;
    getDisplayDescription(state: GameState): string;
    effectUnit: () => {
        unit: string;
    };
    getDisplayEffect(state: GameState): string;
    getBaseLandRequired(): number;
    canTurnOff(): boolean;
}
declare const manaSpout: ManaSpout;
declare class BuildManaSpout extends BuildingSpell {
    getAreas(): Partial<Record<ActionArea, ActionSubcategory[]>>;
    getBuilding(): Building;
    getBaseResourceCost(): Partial<Record<Resource, number>>;
    getBaseResourceScale(): Partial<Record<Resource, number>>;
    getBaseManaCost(state: GameState): number;
    isVisible(state: GameState): boolean;
    getLevelRequirements(): Partial<Record<SpellElement, number>>;
    getElement(): SpellElementType;
    getBaseAlternateLandUnawareBuildingAmount(): number;
}
declare const buildManaSpout: BuildManaSpout;
export { buildManaSpout as BuildManaSpout, manaSpout as ManaSpout };
