import { AllStandards, Standard } from "../Standards/standardsTypes";
import { ScreenedQSRules } from "../types/selectedStandardTypes";

export const screenedOut = (
  AllStandards: AllStandards,
  rules: ScreenedQSRules
): boolean => {
  if (
    (AllStandards.value as Standard).standardInfo.clay &&
    !rules.sediment.clay
  )
    return true;
  if (
    (AllStandards.value as Standard).standardInfo.sand &&
    !rules.sediment.sand
  )
    return true;
  if (
    (AllStandards.value as Standard).standardInfo.silt &&
    !rules.sediment.silt
  )
    return true;
  if (
    (AllStandards.value as Standard).standardInfo.coarse &&
    !rules.texture.coarse
  )
    return true;
  if ((AllStandards.value as Standard).standardInfo.fine && !rules.texture.fine)
    return true;
  if (
    (AllStandards.value as Standard).standardInfo.marine &&
    !rules.water.marine
  )
    return true;
  if (
    (AllStandards.value as Standard).standardInfo.freshwater &&
    !rules.water.freshwater
  )
    return true;
  return false;
};
