import { AttackTarget } from "../exploration/AttackTarget";
import { GameState } from "../GameState";
export declare function isHealingPossible(state: GameState, target: AttackTarget): boolean;
export declare function isHealingRecommended(state: GameState, target: AttackTarget, amountToHeal: number): boolean;
export declare function loadCommonTemporaryEffects(): void;
