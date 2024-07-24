import { GameState } from "../../../GameState";
import { BattlerAction, BattlerStats, Enemy, EnemyLoot } from "../Enemy";
declare class BlazingTurtle extends Enemy {
    getId(): string;
    getName(): string;
    getBaseStats(): BattlerStats;
    getPicture(state: GameState): any;
    getLevel(): number;
    getCoinsAwardedBase(state: GameState): number;
    getMonstiumAwardedBase(state: GameState): number;
    getNextAction(state: GameState): BattlerAction;
    isBoss(): boolean;
    getItemsAwardedBase(state: GameState): EnemyLoot[];
    onDeath(state: GameState, isFromCreatures: boolean, familiarId?: string): GameState;
    getTips(): string;
}
declare const _default: BlazingTurtle;
export default _default;
