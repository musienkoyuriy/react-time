import React, { useState, useEffect } from 'react';
import { TIME_RANGES, UNITS_OF_TIME } from '../../constants/units';
import { isUnitValid } from '../helpers/time.helper';
import { Select, List } from './styles';

const getTimeRange = unitOfTime => {
  return unitOfTime === UNITS_OF_TIME.HOUR ?
    TIME_RANGES.HOUR :
    TIME_RANGES.MINUTES_OR_SECONDS;
}

const TimepickerSelect = ({ timeStep = 1, unitOfTime }) => {
  const [timeRange, setTimeRange] = useState(TIME_RANGES.MINUTES_OR_SECONDS);
  const [timeUnits, setTimeUnits] = useState([]);

  function getTimeUnitsList(timeRange, timeStep) {
    const unitsList = []
    const timeRangeStart = timeRange[0]
    const timeRangeEnd = timeRange[1]

    for (let i = timeRangeStart; i <= timeRangeEnd; i += timeStep) {
      if (timeRangeEnd - i >= timeStep) {
        unitsList.push(i <= 9 ? `0${i}` : i);
      } else {
        unitsList.push(timeRangeEnd);
        break;
      }
    }

    return unitsList;
  }

  useEffect(() => {
    if (!isUnitValid(unitOfTime)) {
      throw new Error(`Please provide a valid unit of time`);
    }
    setTimeRange(getTimeRange(unitOfTime))
  }, [unitOfTime]);

  useEffect(() => {
    setTimeUnits(getTimeUnitsList(timeRange, timeStep));
  }, [timeRange, timeStep]);

  return <Select unitOfTime={unitOfTime}>
    <List>
      {
        timeUnits.map((timeUnit, i) =>
          <li key={i} className="time-unit">{timeUnit}</li>
        )
      }
    </List>
  </Select>
}

export default TimepickerSelect;