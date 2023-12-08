import { isBonusConditionMet } from './isBonusConditionMet';

const sum = (items, getValue) =>
  items.reduce((midSum, item) => midSum + getValue(item), 0);

export const sumBonuses = ({
  bonuses, planet, resource, bonusType
}) => {
  const applicableBonuses = (
    bonuses.filter(bonus => (
      bonus.type === bonusType
      && bonus.resource === resource
      && (!bonus.condition || isBonusConditionMet(planet, bonus.condition))
    ))
  )
  return sum(applicableBonuses, (bonus) => bonus.value);
}

export const sumImprovementBonuses = ({
  improvements, planet, resource, bonusType
}) =>
  sum(improvements, (improvement) => sumBonuses({
    bonuses: improvement.bonuses,
    planet, resource, bonusType
  }))

