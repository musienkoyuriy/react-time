import { UNITS_OF_TIME } from "../../constants/units";

export const isUnitValid = unitOfTime => {
  return Object.values(UNITS_OF_TIME).find(unit => unit === unitOfTime) !== undefined;
};