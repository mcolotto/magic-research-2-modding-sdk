import { GameState } from "../GameState";
import { SpellElementType } from "../spells/Elements";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class SilenceElementBase extends TemporaryEffect {
    constructor(element: SpellElementType);
    element: SpellElementType;
    getId(): string;
    getDisplayName(): string;
    isBeneficial(): boolean;
    isCombatOnly(): boolean;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare function silenceElementTemporaryEffect(element: SpellElementType): SilenceElementBase;
export declare function loadElementalSilence(): void;
export {};
