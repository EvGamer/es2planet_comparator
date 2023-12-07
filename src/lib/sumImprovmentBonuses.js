import { isBonusConditionMet } from './isBonusConditionMet';

export const sumImprovementBonuses = (improvements, planet, resource, bonusType) => improvements
  .flatMap(improvement => improvement.bonuses)
  .filter(bonus => (
    bonus.type === bonusType
    && bonus.resource === resource
    && (!bonus.condition || isBonusConditionMet(planet, bonus.condition))
  ))
  .reduce((sum, bonus) => sum + bonus.value, 0)
