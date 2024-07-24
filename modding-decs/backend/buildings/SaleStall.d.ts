import { ActionArea, ActionSubcategory } from "../action/ActionAreas";
import { GameState } from "../GameState";
import { Resource } from "../Resources";
import { SpellElement, SpellElementType } from "../spells/Elements";
import { Building, BuildingSpell } from "./Building";
export declare const BASE_SALE_STALL_TIME = 30;
export declare function getSaleStallSecsPerSale(state: GameState): number;
declare class SaleStall extends Building {
    getId(): string;
    getName(): string;
    getDisplayDescription(state: GameState): string;
    getDisplayEffect(state: GameState): string;
    getBaseLandRequired(): number;
    canTurnOff(): boolean;
}
declare const saleStall: SaleStall;
declare class BuildSaleStall extends BuildingSpell {
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
export declare function isMarketUnlocked(state: GameState): boolean;
export declare function getSaleStallPriceMultiplier(state: GameState): number;
export declare function getSaleStallPriceMultiplierExplanation(state: GameState): string;
declare const buildSaleStall: BuildSaleStall;
export { buildSaleStall as BuildSaleStall, saleStall as SaleStall };
