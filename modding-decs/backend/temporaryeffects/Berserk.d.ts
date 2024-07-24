import { GameState } from "../GameState";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class Berserk extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    isBeneficial(): boolean;
    getDamagePerSec(state: GameState, temporaryEffectData: TemporaryEffectData): number;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare const berserk: Berserk;
export declare function loadBerserk(): void;
export {};
