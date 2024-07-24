import { GameState } from "../GameState";
import { SpellElementType } from "../spells/Elements";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class ResistElementBase extends TemporaryEffect {
    constructor(element: SpellElementType);
    element: SpellElementType;
    getId(): string;
    getDisplayName(): string;
    isBeneficial(): boolean;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare function resistElementTemporaryEffect(element: SpellElementType): ResistElementBase;
export declare function loadElementalProtection(): void;
export {};
