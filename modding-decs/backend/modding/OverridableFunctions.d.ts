import { formatMultiplier, formatNumber, formatTime } from "../../utils/FormattingUtils";
import { calculateAttackTarget, calculateDamage, calculateIsHit } from "../exploration/Exploration";
import { getCurrentSynchroBonuses } from "../synchro/Synchro";
import { applyTransformations, explainTransformations, explainTransformationsTextUncached } from "../transformation/Transformation";
export type OverridableFunction<T> = (original: T) => T;
export type OverridableFunctions = {
    applyTransformations?: OverridableFunction<typeof applyTransformations>;
    explainTransformations?: OverridableFunction<typeof explainTransformations>;
    explainTransformationsTextUncached?: OverridableFunction<typeof explainTransformationsTextUncached>;
    formatNumber?: OverridableFunction<typeof formatNumber>;
    formatMultiplier?: OverridableFunction<typeof formatMultiplier>;
    formatTime?: OverridableFunction<typeof formatTime>;
    getCurrentSynchroBonuses?: OverridableFunction<typeof getCurrentSynchroBonuses>;
    calculateDamage?: OverridableFunction<typeof calculateDamage>;
    calculateIsHit?: OverridableFunction<typeof calculateIsHit>;
    calculateAttackTarget?: OverridableFunction<typeof calculateAttackTarget>;
};
export declare function registerOverridableFunctions(functions: OverridableFunctions): void;
export declare function getOverriddenFunction(name: string): any;
