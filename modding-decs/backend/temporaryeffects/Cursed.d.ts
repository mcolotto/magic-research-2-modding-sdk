import { GameState } from "../GameState";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class Cursed extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    getIcon(): any;
    isBeneficial(): boolean;
    isCombatOnly(): boolean;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare const cursed: Cursed;
export declare function loadCursed(): void;
export {};
