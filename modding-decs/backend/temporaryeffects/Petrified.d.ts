import { GameState } from "../GameState";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class Petrified extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    isBeneficial(): boolean;
    getIcon(): any;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare const petrified: Petrified;
export declare function loadPetrified(): void;
export {};
