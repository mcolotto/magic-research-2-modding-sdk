import { GameState } from "../GameState";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class Stunned extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    isBeneficial(): boolean;
    getIcon(): any;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare const stunned: Stunned;
declare class StunProtection extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    isBeneficial(): boolean;
    getIcon(): any;
    isDispellable(): boolean;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare const stunProtection: StunProtection;
export declare function loadStunning(): void;
export {};
