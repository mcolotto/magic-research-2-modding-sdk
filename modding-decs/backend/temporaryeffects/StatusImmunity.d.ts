import { GameState } from "../GameState";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class StatusImmunity extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    getIcon(): any;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
}
export declare const statusImmunity: StatusImmunity;
export declare function loadStatusImmunity(): void;
export {};
