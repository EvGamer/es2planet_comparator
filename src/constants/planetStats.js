import { PlanetTypes } from './planetTypes';
import { PlanetSize } from './planetSize';
import { BiosphereType } from './biosphereType';
import { ClimateTemp } from './climateTemp';

const PLANET_PRESETS = {
  gasGiant: {
    biosphere: BiosphereType.gasGiant,
    happiness: -5,
    food: 0,
    popCapacityBySize: {
      [PlanetSize.medium]: 2,
      [PlanetSize.large]: 2,
      [PlanetSize.huge]: 3
    },
  },
  extreme: {
    biosphere: BiosphereType.sterile,
    happiness: -8,
    food: 0,
    popCapacityBySize: {
      [PlanetSize.tiny]: 1,
      [PlanetSize.small]: 2,
      [PlanetSize.medium]: 3,
      [PlanetSize.large]: 4,
      [PlanetSize.huge]: 5,
    }
  },
  inhospitable: {
    biosphere: BiosphereType.sterile,
    happiness: -5,
    food: 0,
    popCapacityBySize: {
      [PlanetSize.tiny]: 2,
      [PlanetSize.small]: 3,
      [PlanetSize.medium]: 4,
      [PlanetSize.large]: 5,
      [PlanetSize.huge]: 6,
    }
  },
  desert: {
    happiness: -3,
    popCapacityBySize: {
      [PlanetSize.tiny]: 3,
      [PlanetSize.small]: 4,
      [PlanetSize.medium]: 5,
      [PlanetSize.large]: 6,
      [PlanetSize.huge]: 7,
    }
  },
  harsh: {
    biosphere: BiosphereType.mundane,
    happiness: -1,
    popCapacityBySize: {
      [PlanetSize.tiny]: 5,
      [PlanetSize.small]: 6,
      [PlanetSize.medium]: 7,
      [PlanetSize.large]: 8,
      [PlanetSize.huge]: 9,
    }
  },
  hospitable: {
    biosphere: BiosphereType.fertile,
    happiness: 0,
    food: 6,
    popCapacityBySize: {
      [PlanetSize.tiny]: 5,
      [PlanetSize.small]: 6,
      [PlanetSize.medium]: 7,
      [PlanetSize.large]: 8,
      [PlanetSize.huge]: 9,
    }
  },
  terrestrial: {
    biosphere: BiosphereType.fertile,
    happiness: 0,
    food: 8,
    dust: 4,
    popCapacityBySize: {
      [PlanetSize.tiny]: 6,
      [PlanetSize.small]: 7,
      [PlanetSize.medium]: 8,
      [PlanetSize.large]: 9,
      [PlanetSize.huge]: 10,
    }
  }
}

export const PLANET_STATS = {
  [PlanetTypes.barren]: {
    ...PLANET_PRESETS.extreme,
    temperature: ClimateTemp.cold,
    industry: 0, dust: 2, science: 16,
  },

  [PlanetTypes.ice]: {
    ...PLANET_PRESETS.inhospitable,
    temperature: ClimateTemp.cold,
    industry: 0, dust: 4, science: 12,
  },

  [PlanetTypes.arctic]: {
    ...PLANET_PRESETS.desert,
    temperature: ClimateTemp.cold,
    biosphere: BiosphereType.sterile,
    food: 1, industry: 0, dust: 6, science: 8,
  },

  [PlanetTypes.snow]: {
    ...PLANET_PRESETS.desert,
    temperature: ClimateTemp.cold,
    biosphere: BiosphereType.mundane,
    food: 2, industry: 0, dust: 4, science: 8,
  },

  [PlanetTypes.tundra]: {
    ...PLANET_PRESETS.harsh,
    temperature: ClimateTemp.cold,
    food: 6, industry: 0, dust: 3, science: 5,
  },

  [PlanetTypes.boreal]: {
    ...PLANET_PRESETS.hospitable,
    temperature: ClimateTemp.cold,
    industry: 0, dust: 3, science: 5,
  },

  [PlanetTypes.lava]: {
    ...PLANET_PRESETS.extreme,
    temperature: ClimateTemp.hot,
    industry: 16, dust: 2, science: 0,
  },

  [PlanetTypes.ash]: {
    ...PLANET_PRESETS.inhospitable,
    temperature: ClimateTemp.hot,
    industry: 12, dust: 4, science: 0,
  },

  [PlanetTypes.desert]: {
    ...PLANET_PRESETS.desert,
    temperature: ClimateTemp.hot,
    biosphere: BiosphereType.sterile,
    food: 1, industry: 8, dust: 6, science: 0,
  },

  [PlanetTypes.arid]: {
    ...PLANET_PRESETS.desert,
    temperature: ClimateTemp.hot,
    biosphere: BiosphereType.mundane,
    food: 2, industry: 8, dust: 4, science: 0,
  },

  [PlanetTypes.mediterranian]: {
    ...PLANET_PRESETS.harsh,
    temperature: ClimateTemp.hot,
    food: 6, industry: 6, dust: 3, science: 0,
  },

  [PlanetTypes.jungle]: {
    ...PLANET_PRESETS.hospitable,
    temperature: ClimateTemp.hot,
    industry: 5, dust: 3, science: 0,
  },

  [PlanetTypes.toxic]: {
    ...PLANET_PRESETS.extreme,
    temperature: ClimateTemp.temperate,
    food: 3, industry: 2, dust: 8, science: 2,
  },

  [PlanetTypes.steppes]: {
    ...PLANET_PRESETS.harsh,
    temperature: ClimateTemp.temperate,
    food: 4, industry: 2, dust: 5, science: 3,
  },

  [PlanetTypes.savannah]: {
    ...PLANET_PRESETS.harsh,
    temperature: ClimateTemp.temperate,
    food: 4, industry: 3, dust: 5, science: 2,
  },

  [PlanetTypes.monsoon]: {
    ...PLANET_PRESETS.harsh,
    temperature: ClimateTemp.temperate,
    food: 6, industry: 2, dust: 4, science: 2,
  },

  [PlanetTypes.atoll]: {
    ...PLANET_PRESETS.terrestrial,
    industry: 6, science: 2,
  },

  [PlanetTypes.ocean]: {
    ...PLANET_PRESETS.terrestrial,
    industry: 2, science: 6,
  },

  [PlanetTypes.terran]: {
    ...PLANET_PRESETS.terrestrial,
    industry: 3, science: 4,
  },

  [PlanetTypes.forest]: {
    ...PLANET_PRESETS.terrestrial,
    industry: 4, science: 3,
  },

  [PlanetTypes.gasTemperate]: {
    ...PLANET_PRESETS.gasGiant,
    temperature: ClimateTemp.temperate,
    industry: 0, dust: 26, science: 0,
  },

  [PlanetTypes.gasWarm]: {
    ...PLANET_PRESETS.gasGiant,
    temperature: ClimateTemp.temperate,
    industry: 10, dust: 18, science: 0,
  },

  [PlanetTypes.gasCold]: {
    ...PLANET_PRESETS.gasGiant,
    temperature: ClimateTemp.cold,
    industry: 0, dust: 14, science: 14,
  },

  [PlanetTypes.gasFrozen]: {
    ...PLANET_PRESETS.gasGiant,
    temperature: ClimateTemp.cold,
    industry: 0, dust: 0, science: 26,
  },

  [PlanetTypes.gasHot]: {
    ...PLANET_PRESETS.gasGiant,
    temperature: ClimateTemp.hot,
    industry: 14, dust: 0, science: 14,
  },

  [PlanetTypes.gasBurning]: {
    ...PLANET_PRESETS.gasGiant,
    temperature: ClimateTemp.hot,
    industry: 26, dust: 0, science: 0,
  },
}
