import * as React from 'react';
import { TIME_RANGES } from '../../constants/units';
import { getTimeRange, isUnitValid } from '../../helpers/time.helper';
import { Select, List } from './styles';

const TimepickerSelect = ({ timeStep = 1, unitOfTime, onSelect }) => {
  const [timeRange, setTimeRange] = React.useState(TIME_RANGES.MINUTES_OR_SECONDS);
  const [timeUnits, setTimeUnits] = React.useState([]);

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

  React.useEffect(() => {
    if (!isUnitValid(unitOfTime)) {
      throw new Error(`Please provide a valid unit of time`);
    }
    setTimeRange(getTimeRange(unitOfTime))
  }, [unitOfTime]);

  React.useEffect(() => {
    setTimeUnits(getTimeUnitsList(timeRange, timeStep));
  }, [timeRange, timeStep]);

  return <Select unitOfTime={unitOfTime}>
    <List>
      {
        timeUnits.map((timeUnit, i) =>
          <li key={i} onClick={() => onSelect(timeUnit)}>{timeUnit}</li>
        )
      }
    </List>
  </Select>
}

export default TimepickerSelect;