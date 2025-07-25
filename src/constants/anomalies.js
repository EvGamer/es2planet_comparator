import { AnomalyType } from "./anomalyTypes";
import { BonusType } from "./bonusType";
import { ResourceType } from "./resourceType";

export const ANOMALIES = [
  {
    id: "dust_nebula",
    name: "Dust Nebula",
    type: AnomalyType.positive,
    bonuses: [
      {
        resource: ResourceType.dust,
        type: BonusType.flat,
        value: 50,
      },
      {
        resource: ResourceType.dust,
        type: BonusType.perPop,
        value: 2,
      }
    ]
  },
  {
    id: "fallen_guardian",
    name: "The Fallen Guardian",
    type: AnomalyType.positive,
    bonuses: [
      {
        resource: ResourceType.industry,
        type: BonusType.perPop,
        value: 2,
      },
      {
        resouce: ResourceType.shipCostReduction,
        type: BonusType.percentile,
      }
    ]
  },
  {
    id: "y_platform",
    name: "The Platform of Ys",
    type: AnomalyType.positive,
    bonuses: [
      {
        resource: ResourceType.maxPopCapacity,
        type: BonusType.flat,
        value: 2,
      }
    ]
  },
  {
    id: "17k_island_bridge",
    name: "Seventeen Thousand Island Bridge",
    type: AnomalyType.positive,
    bonuses: [
      {
        resource: ResourceType.maxPopCapacity,
        type: BonusType.perPlanet,
        value: 2,
      },
      ...getFIDSIBonuses({
        type: BonusType.perPop,
        value: 1,
      })
    ]
  },
  {
    id: "tree_of_worlds",
    name: "Tree of Worlds",
    type: AnomalyType.positive,
    bonuses: [
      {
        resource: ResourceType.happiness,
        type: BonusType.perPop,
        value: 6,
      },
      {
        resource: ResourceType.food,
        type: BonusType.perPop,
        value: 2,
      },
      {
        resource: ResourceType.food,
        type: BonusType.flat,
        value: 20,
      }
    ]
  }
]