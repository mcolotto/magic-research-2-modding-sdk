import { GameState } from "../../../GameState";
import { BattlerAction, BattlerStats, Enemy, EnemyLoot } from "../Enemy";
declare class ManEatingPlant extends Enemy {
    getId(): string;
    getName(): string;
    getBaseStats(): BattlerStats;
    getPhase(state: GameState): number;
    getPicture(state: GameState): any;
    getLevel(): number;
    getCoinsAwardedBase(state: GameState): number;
    getMonstiumAwardedBase(state: GameState): number;
    getNextActionPhase3(state: GameState): BattlerAction;
    getNextActionPhase2(state: GameState): BattlerAction;
    getNextAction(state: GameState): BattlerAction;
    isBoss(): boolean;
    getBackdropColor(): string;
    getItemsAwardedBase(state: GameState): EnemyLoot[];
    onDeath(state: GameState, isFromCreatures: boolean, familiarId?: string): GameState;
    getTips(): string;
}
export declare const manEatingPlant: ManEatingPlant;
export declare function loadManEatingPlant(): void;
export {};
