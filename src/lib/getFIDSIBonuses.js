import { BonusType } from '../constants/bonusType';
import { ResourceType } from '../constants/resourceType';

export const getFIDSIBonuses = (bonus) => [
  ResourceType.food,
  ResourceType.industry,
  ResourceType.dust,
  ResourceType.science,
  ResourceType.influence,
].map((resource) => ({
  resource,
  ...bonus,
}))

export const getFIDSBonuses = (bonus) => [
  ResourceType.food,
  ResourceType.industry,
  ResourceType.dust,
  ResourceType.science,
].map((resource) => ({
  resource,
  ...bonus,
}))
