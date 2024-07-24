import { GameState } from "../../../GameState";
import { BattlerStats, Enemy, EnemyLoot } from "../Enemy";
declare class Slime extends Enemy {
    getId(): string;
    getName(): string;
    getBaseStats(): BattlerStats;
    getPicture(state: GameState): any;
    getLevel(): number;
    getCoinsAwardedBase(state: GameState): number;
    getMonstiumAwardedBase(state: GameState): number;
    getItemsAwardedBase(state: GameState): EnemyLoot[];
}
declare const _default: Slime;
export default _default;
