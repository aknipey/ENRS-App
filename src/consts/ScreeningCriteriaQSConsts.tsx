import {
  SedimentSets_T,
  TextureSets_T,
  WaterSets_T,
} from "../types/selectedStandardTypes";

export const SEDIMENT_SETS: SedimentSets_T[] = [
  {
    sand: true,
    silt: true,
    clay: true,
  },
  {
    sand: true,
    silt: false,
    clay: false,
  },
  {
    sand: false,
    silt: true,
    clay: false,
  },
  {
    sand: false,
    silt: false,
    clay: true,
  },
];

export const TEXTURE_SETS: TextureSets_T[] = [
  {
    coarse: true,
    fine: true,
  },
  {
    coarse: true,
    fine: false,
  },
  {
    coarse: false,
    fine: true,
  },
];

export const WATER_SETS: WaterSets_T[] = [
  {
    marine: true,
    freshwater: true,
  },
  {
    marine: true,
    freshwater: false,
  },
  {
    marine: false,
    freshwater: true,
  },
];

export const INITIAL_QS_RULES = {
  sediment: SEDIMENT_SETS[0],
  texture: TEXTURE_SETS[0],
  water: WATER_SETS[0],
};

