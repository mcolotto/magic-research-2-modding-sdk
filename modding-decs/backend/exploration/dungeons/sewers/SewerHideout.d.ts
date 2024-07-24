import { GameState } from "../../../GameState";
import { Enemy } from "../../enemies/Enemy";
import { DungeonFloor, ExplorationPossibility } from "../DungeonFloor";
declare class SewerHideout extends DungeonFloor {
    getId(): string;
    getFloorName(): string;
    getBoss(state: GameState): Enemy;
    getBreedingLevel(): number;
    isMainStoryDungeonFloor(): boolean;
    getExplorationRequiredTimeSecBase(): number;
    _getExplorationSuccessesForBossBase(): number;
    getMaximumMPLRecommendation(): number | undefined;
    getBaseExplorationPossibilities(state: GameState): ExplorationPossibility[];
    isUnlocked(state: GameState): boolean;
    getNextFloor(state: GameState): DungeonFloor;
}
declare const _default: SewerHideout;
export default _default;
