import { CombatStat } from "../exploration/CombatStats";
import { GameState } from "../GameState";
import { TransformationType } from "../transformation/Transformation";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class Weakened extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    getIcon(): any;
    isBeneficial(): boolean;
    isCommonBuffEnabled(): {
        stat: CombatStat;
        type: TransformationType;
    }[];
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare const weakened: Weakened;
export declare function loadWeakened(): void;
export {};
