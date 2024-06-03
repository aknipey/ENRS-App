import { Standard } from "../Standards/standardsTypes";
import { ScreenedQSRules } from "../types/selectedStandardTypes";

export const screenedOut = (
  standard: Standard,
  rules: ScreenedQSRules
): boolean => {
  if (standard.standardInfo.clay && !rules.sediment.clay) return true;
  if (standard.standardInfo.sand && !rules.sediment.sand) return true;
  if (standard.standardInfo.silt && !rules.sediment.silt) return true;
  if (standard.standardInfo.coarse && !rules.texture.coarse) return true;
  if (standard.standardInfo.fine && !rules.texture.fine) return true;
  if (standard.standardInfo.marine && !rules.water.marine) return true;
  if (standard.standardInfo.freshwater && !rules.water.freshwater) return true;
  return false;
};
