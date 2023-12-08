import { getFIDSBonuses, getFIDSIBonuses } from '../lib/getFIDSIBonuses';
import { BonusConditionType } from './bonusConditionType';
import { BonusType } from './bonusType';
import { Faction } from './faction';
import { ResourceType } from './resourceType';

export const PLANET_SPECIALIZATION_STATS = [
  {
    id: "food1",
    name: "Evolved Soils",
    tier: 3,
    bonuses: [
      {
        resource: ResourceType.food,
        value: 1,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.food,
        value: 1,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsFertile,
      }
    ]
  },

  {
    id: "food2",
    name: "Alien Grafting",
    tier: 4,
    bonuses: [
      {
        resource: ResourceType.food,
        value: 2,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.food,
        value: 2,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsFertile,
      }
    ]
  },

  {
    id: "food3",
    name: "Aquaculture Dome",
    tier: 5,
    bonuses: [
      {
        resource: ResourceType.food,
        value: 3,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.food,
        value: 3,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsFertile,
      }
    ]
  },

  {
    id: "industry1",
    name: "Industrial Zones",
    tier: 3,
    bonuses: [
      {
        resource: ResourceType.industry,
        value: 1,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.industry,
        value: 1,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsHot,
      }
    ]
  },


  {
    id: "industry2",
    name: "Geo-Industrial Plants",
    tier: 4,
    bonuses: [
      {
        resource: ResourceType.industry,
        value: 2,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.industry,
        value: 2,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsHot,
      }
    ]
  },

  {
    id: "dust2",
    name: "Atemporal Finance",
    tier: 4,
    bonuses: [
      {
        resource: ResourceType.dust,
        value: 2,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.dust,
        value: 2,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsSterile,
      }
    ]
  },

  {
    id: "science1",
    name: "Exoscience Stations",
    tier: 2,
    bonuses: [
      {
        resource: ResourceType.science,
        value: 1,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.science,
        value: 1,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsCold,
      }
    ]
  },

  {
    id: "science2",
    name: "Citizen Science",
    tier: 5,
    bonuses: [
      {
        resource: ResourceType.science,
        value: 2,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.science,
        value: 2,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsCold,
      }
    ]
  },

  {
    id: "science1Nakalim",
    name: "Exoscience Stations (Nakalim)",
    tier: 2,
    replaces: "science1",
    faction: Faction.nakalim,
    bonuses: [
      {
        resource: ResourceType.science,
        value: 1,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.science,
        value: 1,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsCold,
      },
      {
        resource: ResourceType.science,
        value: 5,
        type: BonusType.perPlanet
      }
    ]
  },

  {
    id: "science2Nakalim",
    name: "Citizen Science (Nakalim)",
    replaces: "science1",
    faction: Faction.nakalim,
    tier: 5,
    bonuses: [
      {
        resource: ResourceType.science,
        value: 2,
        type: BonusType.perPop,
      },
      {
        resource: ResourceType.science,
        value: 2,
        type: BonusType.perPop,
        condition: BonusConditionType.planetIsCold,
      },
      {
        resource: ResourceType.science,
        value: 15,
        type: BonusType.perPlanet
      }
    ]
  },

  {
    id: "influence1",
    name: "SPIN Project",
    tier: 2,
    bonuses: [
      {
        resource: ResourceType.influence,
        value: 1,
        type: BonusType.perPop,
      },
    ]
  },

  {
    id: "influence2",
    name: "Edenization",
    tier: 4,
    bonuses: [
      {
        resource: ResourceType.influence,
        value: 2,
        type: BonusType.perPop,
      },
    ]
  },

  {
    id: "influence3",
    name: "Bio-Enhancement Facility",
    tier: 5,
    bonuses: [
      {
        resource: ResourceType.influence,
        value: 3,
        type: BonusType.perPop,
      },
    ]
  },

  {
    id: "strategics1",
    name: "Slag and Sludge Center",
    tier: 3,
    bonuses: [
      {
        resource: ResourceType.strategic,
        value: 1,
        type: BonusType.perPlanet,
      },
    ]
  },

  {
    id: "strategics2",
    name: "Self-mining NPO",
    tier: 5,
    bonuses: [
      {
        resource: ResourceType.strategic,
        value: 2,
        type: BonusType.perPlanet,
      },
    ]
  },

  {
    id: "fids1Hissho",
    name: "Fealty Center",
    faction: Faction.hissho,
    tier: 2,
    bonuses: getFIDSBonuses({
      value: 1,
      type: BonusType.perPop,
    }),
  },

  {
    id: "fids2Hissho",
    name: "Fealty Foundation",
    faction: Faction.hissho,
    tier: 3,
    bonuses: getFIDSBonuses({
      value: 2,
      type: BonusType.perPop,
    }),
  },

  {
    id: "fids3Hissho",
    name: "Fealty Institute",
    faction: Faction.hissho,
    tier: 4,
    bonuses: getFIDSBonuses({
      value: 3,
      type: BonusType.perPop,
    }),
  },

  {
    id: "temple",
    name: "Temple to the Lost",
    faction: Faction.nakalim,
    tier: 0,
    bonuses: [
      {
        resource: ResourceType.influence,
        type: BonusType.perPop,
        value: 10,
      },
      ...getFIDSIBonuses({
        value: -50,
        type: BonusType.planetPercentile,
      }),
    ]
  }
];
