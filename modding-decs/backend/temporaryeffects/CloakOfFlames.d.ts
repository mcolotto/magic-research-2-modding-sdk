import { GameState } from "../GameState";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class CloakOfFlames extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    isBeneficial(): boolean;
    getIcon(): any;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare const cloakOfFlames: CloakOfFlames;
export declare function loadCloakOfFlames(): void;
export {};
