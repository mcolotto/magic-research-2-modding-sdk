import { GameState } from "../GameState";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class StatusImmunityBase extends TemporaryEffect {
    constructor(effect: TemporaryEffect);
    effect: TemporaryEffect;
    getId(): string;
    getDisplayName(): string;
    isBeneficial(): boolean;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare function specificStatusImmunityTemporaryEffect(effect: TemporaryEffect): StatusImmunityBase;
export declare function loadSpecificStatusImmunity(): void;
export {};
