import { BiosphereType } from '../constants/biosphereType';
import { BonusConditionType } from '../constants/bonusConditionType';
import { ClimateTemp } from '../constants/climateTemp';

export const isBonusConditionMet = (planet, condition) => {
  console.log(planet.temperature)
  switch (condition) {
    case BonusConditionType.planetIsSterile:
      return planet.biosphere === BiosphereType.sterile;
    case BonusConditionType.planetIsFertile:
      return planet.biosphere === BiosphereType.fertile;
    case BonusConditionType.planetIsHot:
      return planet.temperature === ClimateTemp.hot;
    case BonusConditionType.planetIsCold:
      return planet.temperature === ClimateTemp.cold;
    case BonusConditionType.planetIsGasGiant:
      return planet.biosphere === BiosphereType.gasGiant;
    default:
      return false;
  }
}
