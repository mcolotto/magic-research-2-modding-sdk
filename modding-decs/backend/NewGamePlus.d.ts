import { GameState } from "./GameState";
import { Storyline } from "./storylines/Storyline";
export declare function getMaxPossibleDifficultyLevel(state: GameState): number;
export declare function getTotalAvailableBoonPoints(state: GameState): number;
export declare function getNewBoonPointsAvailable(state: GameState): number;
export declare function triggerNewGamePlus(state: GameState, sheerPowerLevel: number, storylineOracleLevel: number, blazingSpeedLevel: number, worldDifficultyLevel: number): GameState;
declare function getIncrementalPointsRequiredForLevel(level: number): number;
export declare function getTotalPointsRequiredForLevel(level: number): number;
declare function getPointsRequiredForConfiguration(sheerPowerLevel: number, storylineOracleLevel: number, blazingSpeedLevel: number): number;
export declare function getNewGamePlusCount(state: GameState): number;
export declare function getSheerPowerLevel(state: GameState): number;
export declare function getStorylineOracleLevel(state: GameState): number;
export declare function getBlazingSpeedLevel(state: GameState): number;
export declare function getWorldDifficultyLevel(state: GameState): number;
declare function getNewGamePlusElementMaxLevelBonus(sheerPowerLevel: number): number;
declare function getNewGamePlusFamiliarMaxLevelBonus(sheerPowerLevel: number): number;
declare function getNewGamePlusItemQualityMaxBonus(sheerPowerLevel: number): number;
declare function getNewGamePlusStorageMultiplier(sheerPowerLevel: number): number;
declare function getNewGamePlusProductionMultiplier(sheerPowerLevel: number): number;
declare function getNewGamePlusChannelingAndSalePriceMultiplier(blazingSpeedLevel: number): number;
declare function getNewGamePlusExpGainMultiplier(blazingSpeedLevel: number): number;
declare function getNewGamePlusLootMultiplier(blazingSpeedLevel: number): number;
declare function getNewGamePlusHpMultiplier(difficultyLevel: number): number;
declare function getNewGamePlusAttackDelayMultiplier(difficultyLevel: number): number;
declare function getNewGamePlusAccuracyAndDodgeMultiplier(difficultyLevel: number): number;
declare function getNewGamePlusOtherStatMultiplier(difficultyLevel: number): number;
declare function getNewGamePlusBoonPointsEarnedMultiplier(difficultyLevel: number): number;
declare function getStorylinesToUnlockForSpecificOracleLevel(storylineOracleLevel: number): Storyline[];
declare function getStorylinesToAvoidForOracle10(): Storyline[];
export declare const NewGamePlus: {
    getMaxPossibleDifficultyLevel: typeof getMaxPossibleDifficultyLevel;
    BASE_BOON_POINTS_PER_WORLD: number;
    MAX_DIFFICULTY_LEVEL: number;
    MAX_BOON_LEVEL: number;
    triggerNewGamePlus: typeof triggerNewGamePlus;
    getIncrementalPointsRequiredForLevel: typeof getIncrementalPointsRequiredForLevel;
    getPointsRequiredForConfiguration: typeof getPointsRequiredForConfiguration;
    getStorylinesToUnlockForSpecificOracleLevel: typeof getStorylinesToUnlockForSpecificOracleLevel;
    getStorylinesToAvoidForOracle10: typeof getStorylinesToAvoidForOracle10;
    getNewGamePlusElementMaxLevelBonus: typeof getNewGamePlusElementMaxLevelBonus;
    getNewGamePlusFamiliarMaxLevelBonus: typeof getNewGamePlusFamiliarMaxLevelBonus;
    getNewGamePlusItemQualityMaxBonus: typeof getNewGamePlusItemQualityMaxBonus;
    getNewGamePlusStorageMultiplier: typeof getNewGamePlusStorageMultiplier;
    getNewGamePlusProductionMultiplier: typeof getNewGamePlusProductionMultiplier;
    getNewGamePlusChannelingAndSalePriceMultiplier: typeof getNewGamePlusChannelingAndSalePriceMultiplier;
    getNewGamePlusExpGainMultiplier: typeof getNewGamePlusExpGainMultiplier;
    getNewGamePlusLootMultiplier: typeof getNewGamePlusLootMultiplier;
    getNewGamePlusHpMultiplier: typeof getNewGamePlusHpMultiplier;
    getNewGamePlusAttackDelayMultiplier: typeof getNewGamePlusAttackDelayMultiplier;
    getNewGamePlusAccuracyAndDodgeMultiplier: typeof getNewGamePlusAccuracyAndDodgeMultiplier;
    getNewGamePlusOtherStatMultiplier: typeof getNewGamePlusOtherStatMultiplier;
    getNewGamePlusBoonPointsEarnedMultiplier: typeof getNewGamePlusBoonPointsEarnedMultiplier;
};
export declare function loadNewGamePlus(): void;
export {};
