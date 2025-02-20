import { GameState } from "../GameState";
import { SpellElement } from "../spells/Elements";
import { Spell } from "../spells/Spell";
import { AutocastCondition } from "./AutocastCondition";
import { SpellAutocastCategory } from "./SpellAutocastCategory";
export type AutocastRule = {
    id: string;
    spellId: string;
    disabled: boolean;
    wizardsAssigned: number;
    conditions: AutocastConditionData[];
    extra?: Record<string, any>;
};
export type AutocastRuleStatus = {
    wizardsAssigned: number;
    disabled: boolean;
    currentPoints: number;
    hidden: boolean;
};
export type AutocastStrategy = {
    rules: AutocastRule[];
    permaCastRules: Record<string, AutocastRule>;
    name: string;
};
export type AutocastConditionData = {
    condition: string;
    values: string[];
};
export declare function translateSpellAutocastCategory(category: SpellAutocastCategory): string;
export declare function getAutocastPointIncomePerSecPerWizard(state: GameState): any;
export declare function explainAutocastPointIncomePerSecPerWizard(state: GameState): string;
export declare function getWizardAmount(state: GameState): number;
export declare function explainWizardAmount(state: GameState): string;
export declare function getFreeWizards(state: GameState): number;
export declare function getFreeOrPermacastingWizards(state: GameState): number;
export declare function getPermacastingWizards(state: GameState): number;
export declare function getAutocastPointCap(state: GameState, rule: AutocastRule): number;
export declare function permaCastWizardsNeeded(state: GameState, spell: Spell): number;
export declare function permaCastWizardPowerNeeded(state: GameState, spell: Spell): number;
export declare function addSpellToPermaCast(state: GameState, spell: Spell): GameState;
export declare function removeSpellFromPermaCast(state: GameState, spell: Spell): GameState;
export declare function isSpellInWizards(state: GameState, spell: Spell): boolean;
export declare function isSpellInPermaCast(state: GameState, spell: Spell): boolean;
export declare function assignWizardsToRuleIndex(state: GameState, ruleIdx: number, amount: number): GameState;
export declare function assignWizardsToRule(state: GameState, rule: AutocastRule, amount: number): GameState;
export declare function cleanUpStrategyRuleWizardAmounts(state: GameState): GameState;
export declare function toggleAutocastRuleDisabledIndex(state: GameState, ruleIdx: number): GameState;
export declare function toggleAutocastRuleDisabled(state: GameState, rule: AutocastRule): GameState;
export declare function toggleAutocastRuleHiddenIndex(state: GameState, ruleIdx: number): GameState;
export declare function toggleAutocastRuleHidden(state: GameState, rule: AutocastRule): GameState;
export declare function unhideAllRules(state: GameState): GameState;
export declare function getCurrentAutocastStrategy(state: GameState): AutocastStrategy;
export declare function getAutocastStatusByRuleIndex(state: GameState, index: number): AutocastRuleStatus;
export declare function getAutocastRuleIndexByRule(state: GameState, rule: AutocastRule): number;
export declare function getAutocastStatusByRule(state: GameState, rule: AutocastRule): AutocastRuleStatus;
export declare function deleteAllRulesFromCurrentStrategy(state: GameState): GameState;
export declare function getAutocastRuleBySpell(state: GameState, spell: Spell, strategy?: AutocastStrategy): AutocastRule | null;
export declare function getAutocastRuleById(state: GameState, ruleId: string): AutocastRule | null;
export declare function getAssignedWizardsByRuleIndex(state: GameState, index: number): number;
export declare function saveCurrentAutocastStrategy(state: GameState, name: string, index: number): GameState;
export declare function clearAutocastStrategy(state: GameState, index: number): GameState;
export declare function loadAutocastStrategy(state: GameState, index: number): GameState;
export declare function autoDisablePermaCastRules(state: GameState): GameState;
export declare function getConditionFromData(conditionData: AutocastConditionData): AutocastCondition;
export declare function isAutocastUnlocked(state: GameState): boolean;
export declare function isAutocastEverUnlocked(state: GameState): boolean;
export declare function estimateIntervalBetweenCastsForRule(state: GameState, rule: AutocastRule, ruleStatus: AutocastRuleStatus): number;
export declare function estimateIntervalBetweenCastsForRuleIndex(state: GameState, rule: AutocastRule, index: number): number;
export declare function estimateManaConsumptionPerSecPerRule(state: GameState, rule: AutocastRule, ruleStatus: AutocastRuleStatus): number;
export declare function estimateManaConsumptionPerSecPerRuleIndex(state: GameState, rule: AutocastRule, index: number): number;
export declare function estimateExpGainPerSecPerRule(state: GameState, rule: AutocastRule, index: number): Partial<Record<SpellElement, number>>;
export declare function estimateManaConsumptionPerSecPermaCast(state: GameState, strategy: AutocastStrategy): number;
export declare function estimateWizardPowerConsumptionPerSecPermaCast(state: GameState, strategy: AutocastStrategy): number;
export declare function clearAutocastCaches(state: GameState): GameState;
export declare function estimateWizardsNeededPermaCast(state: GameState, strategy: AutocastStrategy): number;
export declare function estimateManaConsumptionPerSecPerStrategy(state: GameState, strategy: AutocastStrategy): number;
export declare function estimateExpGainPerSecPerStrategy(state: GameState, strategy: AutocastStrategy): Partial<Record<SpellElement, number>>;
export declare function getSortedPermaCastSpellList(state: GameState, strategy: AutocastStrategy, includeInvisible?: boolean): Spell[];
export declare function calculatePermacastInfo(state: GameState, strategy: AutocastStrategy): {
    permaCastSpellRequiredWizardPower: Record<string, number>;
    permaCastSpellRequiredMana: Record<string, number>;
    sortedPermaCastSpells: Spell[];
};
export declare function deassignWizards(state: GameState, amountOfWizards: number): GameState;
export declare function loadAutocast(): void;
