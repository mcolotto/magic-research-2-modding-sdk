import { GameState } from "../GameState";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class DivineImmunityTemporaryEffect extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    isCombatOnly(): boolean;
    getIcon(): any;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare const divineImmunityTemporaryEffect: DivineImmunityTemporaryEffect;
export declare function loadDivineImmunity(): void;
export {};
