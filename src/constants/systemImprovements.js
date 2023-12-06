import { BonusConditionType } from './bonusConditionType';
import { BonusType } from './bonusType';
import { ResourceType } from './resourceType';
import { StrategicType } from './strategicType';

export const SYSTEM_IMPROVEMENTS = [
  {
    id: "transnet",
    name: "Interplanetary Transport Network",
    upkeep: 4,
    tier: 1,
    cost: {
      [ResourceType.industry]: 280,
    },
    bonuses: [
      {
        resource: ResourceType.industry,
        type: BonusType.perPop,
        value: 1,
      },
      {
        resource: ResourceType.industry,
        type: BonusType.perPop,
        value: 3,
        condition: BonusConditionType.planetHasStrategic,
      }
    ]
  },

  {
    id: "xenotourism",
    name: "Xenotourism Agenciencies",
    tier: 2,
    upkeep: 0,
    cost: {
      [ResourceType.industry]: 560,
    },
    bonuses: [
      {
        resource: ResourceType.dust,
        type: BonusType.perPop,
        value: 1,
      },
      {
        resource: ResourceType.dust,
        type: BonusType.perPop,
        value: 3,
        condition: BonusConditionType.planetHasLuxury,
      }
    ]
  },

  {
    id: "pulvis",
    name: "Pulvis Production",
    upkeep: 0,
    cost: {
      [ResourceType.industry]: 1120,
      [StrategicType.titanium]: 5,
    },
    bonuses: [
      {
        resource: ResourceType.dust,
        type: BonusType.perPop,
        value: 2,
      }
    ]
  },

  {
    id: "ai_labor",
    name: "AI Labor",
    tier: 3,
    upkeep: 16,
    cost: {
      [ResourceType.industry]: 1120,
    },
    bonuses: [
      {
        resource: ResourceType.industry,
        type: BonusType.perPop,
        value: 5,
        condition: BonusConditionType.planetIsSterile,
      },
      {
        resource: ResourceType.industry,
        type: BonusType.perPop,
        value: 5,
        condition: BonusConditionType.planetIsHot,
      }
    ]
  },

  {
    id: "taxation_system",
    name: "Adaptive taxation system",
    tier: 4,
    upkeep: 0,
    cost: {
      [ResourceType.industry]: 2240,
    },
    bonuses: [
      {
        resource: ResourceType.dust,
        type: BonusType.perPop,
        value: 4,
        condition: BonusConditionType.planetIsTemperate,
      },
      {
        resource: ResourceType.dust,
        type: BonusType.perPop,
        value: 4,
        condition: BonusConditionType.planetIsFertile,
      }
    ]
  },

  {
    id: "borers_guild",
    name: "Borer's Guild Bourse",
    tier: 4,
    upkeep: 32,
    cost: {
      [ResourceType.industry]: 2240,
    },
    bonuses: [
      {
        resource: ResourceType.tradeValue,
        type: BonusType.percentile,
        value: 25,
      },
      {
        resource: ResourceType.dust,
        type: BonusType.perPop,
        value: 5,
        condition: BonusConditionType.planetIsSterile,
      }
    ]
  },

  {
    id: "fab_license",
    name: "Fabrication License",
    upkeep: 32,
    tier: 4,
    cost: {
      [ResourceType.industry]: 2240,
      [StrategicType.adamantium]: 25,
    },
    bonuses: [
      {
        resource: ResourceType.industry,
        type: BonusType.percentile,
        value: 10,
      },
      {
        resource: ResourceType.industry,
        type: BonusType.perPop,
        value: 4,
      }
    ]
  },

  {
    id: "fab_license",
    name: "Fabrication License",
    upkeep: 32,
    tier: 4,
    cost: {
      [ResourceType.industry]: 2240,
      [StrategicType.adamantium]: 25,
    },
    bonuses: [
      {
        resource: ResourceType.industry,
        type: BonusType.percentile,
        value: 10,
      },
      {
        resource: ResourceType.industry,
        type: BonusType.perPop,
        value: 4,
      }
    ]
  },

  {
    id: "hazard_mine",
    name: "Hazardous Mining Facility",
    upkeep: 64,
    tier: 5,
    cost: {
      [ResourceType.industry]: 4480,
    },
    bonuses: [
      {
        resource: ResourceType.industry,
        type: BonusType.perPopPerStrategic,
        value: 5,
        condition: BonusConditionType.planetHasStrategic,
      }
    ]
  },

  {
    id: "magnetic_generator",
    name: "Magnetic Field Generator",
    upkeep: 8,
    tier: 2,
    cost: {
      [ResourceType.industry]: 560,
    },
    bonuses: [
      {
        resource: ResourceType.science,
        type: BonusType.perPop,
        value: 1,
      },
      {
        resource: ResourceType.science,
        type: BonusType.perPop,
        value: 2,
        condition: BonusConditionType.planetHasAnomaly
      }
    ]
  },

  {
    id: "eco_habitats",
    name: "Eco Habitats",
    upkeep: 16,
    tier: 3,
    cost: {
      [ResourceType.industry]: 1120,
    },
    bonuses: [
      {
        resource: ResourceType.maxPopCapacity,
        type: BonusType.perPlanet,
        value: 1,
        condition: BonusConditionType.planetIsSterile,
      }
    ]
  },

  /*{
    id: "eco_habitats_horatio",
    replaces: "eco_habitats",
    name: "Skyward Dwellings",
    upkeep: 16,
    tier: 3,
    cost: {
      [ResourceType.industry]: 1120,
    },
    bonuses: [
      {
        resource: ResourceType.maxPopCapacity,
        type: BonusType.perPlanet,
        value: 1,
      }
    ]
  },*/

  {
    id: "graviton_lab",
    name: "Graviton-Shielded Laboratories",
    upkeep: 16,
    tier: 3,
    cost: {
      [ResourceType.industry]: 1120,
      [StrategicType.hyperium]: 5,
    },
    bonuses: [
      {
        resource: ResourceType.science,
        type: BonusType.perPop,
        value: 2,
      },
      {
        resource: ResourceType.science,
        type: BonusType.flat,
        value: 30,
      }
    ]
  },

  /*{
    id: "graviton_lab_sophon",
    replaces: "graviton_lab",
    name: "Graviton-Shielded Laboratories",
    upkeep: 16,
    tier: 3,
    cost: {
      [ResourceType.industry]: 1120,
      [StrategicType.hyperium]: 5,
    },
    bonuses: [
      {
        resource: ResourceType.science,
        type: BonusType.perPop,
        value: 3,
      },
      {
        resource: ResourceType.science,
        type: BonusType.flat,
        value: 50,
      }
    ]
  },*/

  {
    id: "cosmetic_genetics",
    name: "Cosmetic Genetics",
    upkeep: 32,
    tier: 4,
    cost: {
      [ResourceType.industry]: 2240,
    },
    bonuses: [
      {
        resource: ResourceType.maxPopCapacity,
        type: BonusType.perPlanet,
        value: 1,
        condition: BonusConditionType.planetIsSterile,
      },
      {
        resource: ResourceType.maxPopCapacity,
        type: BonusType.perPlanet,
        value: 1,
        condition: BonusConditionType.planetIsFertile,
      }
    ]
  },

  {
    id: "punctuated_evolution",
    name: "Punctuated Evolution Foundation",
    upkeep: 32,
    tier: 4,
    cost: {
      [ResourceType.industry]: 2240,
    },
    bonuses: [
      {
        resource: ResourceType.science,
        type: BonusType.perPop,
        value: 2,
        condition: BonusConditionType.planetIsCold,
      },
      {
        resource: ResourceType.science,
        type: BonusType.perPop,
        value: 4,
        condition: BonusConditionType.planetIsFertile,
      }
    ]
  },

  {
    id: "deep_atmosphere_habitats",
    name: "Deep Atmosphere Habitats",
    upkeep: 64,
    tier: 5,
    cost: {
      [ResourceType.industry]: 4480,
    },
    bonuses: [
      {
        resource: ResourceType.maxPopCapacity,
        type: BonusType.perPlanet,
        value: 3,
        condition: BonusConditionType.planetIsGasGiant,
      },
    ]
  },

  {
    id: "lunar_suburbs",
    name: "Deep Atmosphere Habitats",
    upkeep: 64,
    tier: 5,
    cost: {
      [ResourceType.industry]: 4480,
    },
    bonuses: [
      {
        resource: ResourceType.maxPopCapacity,
        type: BonusType.perPlanet,
        value: 2,
        condition: BonusConditionType.planetHasMoon,
      },
    ]
  },

  {
    id: "school_of_geniuses",
    name: "School of Geniuses",
    upkeep: 64,
    tier: 5,
    cost: {
      [ResourceType.industry]: 1120,
    },
    bonuses: [
      {
        resource: ResourceType.science,
        type: BonusType.perPop,
        value: 5,
        condition: BonusConditionType.planetHasReducedAnomaly,
      },
      {
        resource: ResourceType.science,
        type: BonusType.perPop,
        value: 5,
        condition: BonusConditionType.planetHasNegativeAnomaly,
      },
    ]
  },

  {
    id: "dust_bonanza",
    name: "Dust Bonanza",
    upkeep: 64,
    tier: 5,
    cost: {
      [ResourceType.industry]: 1120,
    },
    bonuses: [
      {
        resource: ResourceType.dust,
        type: BonusType.perPop,
        value: 5,
        condition: BonusConditionType.planetHasReducedAnomaly,
      },
      {
        resource: ResourceType.dust,
        type: BonusType.perPop,
        value: 5,
        condition: BonusConditionType.planetHasNegativeAnomaly,
      },
    ]
  },
]
