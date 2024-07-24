import { GameState } from "../GameState";
import { TemporaryEffect } from "./TemporaryEffect";
import { TemporaryEffectData } from "./TemporaryEffects";
declare class Corrosion extends TemporaryEffect {
    getId(): string;
    getDisplayName(): string;
    getIcon(): any;
    isBeneficial(): boolean;
    corrosionDoTAmountTags: (target: any) => any[];
    getDamagePerSec(state: GameState, temporaryEffectData: TemporaryEffectData): any;
    getDisplayDescription(state: GameState, temporaryEffectData: TemporaryEffectData): string;
    mergeData(state: GameState, oldData: TemporaryEffectData, newData: TemporaryEffectData, mode: "add" | "replace"): TemporaryEffectData;
}
export declare const corrosion: Corrosion;
export declare function loadCorrosion(): void;
export {};
