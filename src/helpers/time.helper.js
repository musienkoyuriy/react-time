import { TIME_RANGES, UNITS_OF_TIME } from "../constants/units";

export const isUnitValid = unitOfTime => {
  return Object.values(UNITS_OF_TIME).find(unit => unit === unitOfTime) !== undefined;
};

export const getTimeRange = unitOfTime => {
  return unitOfTime === UNITS_OF_TIME.HOUR ?
    TIME_RANGES.HOUR :
    TIME_RANGES.MINUTES_OR_SECONDS;
}

export const withZero = number => {
  return number <= 9 ? `0${number}` : number
}
