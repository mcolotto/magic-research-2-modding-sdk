/// <reference types="react" />
import { Enemy } from "../../backend/exploration/enemies/Enemy";
export type CombatStatsDisplay = {
    currentHP: number;
    maxHP: number;
    maxHPExplanation?: string;
    hpRegen?: number;
    hpRegenExplanation?: string;
    attack: number;
    attackExplanation?: string;
    attackDelay: number;
    attackDelayExplanation?: string;
    defense: number;
    defenseExplanation?: string;
    accuracy: number;
    accuracyExplanation?: string;
    dodge: number;
    dodgeExplanation?: string;
    crit: number;
    critExplanation?: string;
};
export declare function PlayerCombatStatsViewer(props: {
    hideText?: boolean;
    isVisible?: boolean;
}): JSX.Element;
export declare function EnemyCombatStatsViewer(props: {
    enemy: Enemy;
    obfuscateValues?: boolean;
    hideText?: boolean;
    isVisible?: boolean;
}): JSX.Element;
export declare function CombatStatsViewer(props: {
    obfuscateValues?: boolean;
    hideText?: boolean;
    isVisible?: boolean;
    showCurrentHP?: boolean;
    combatStats: CombatStatsDisplay;
}): JSX.Element;
