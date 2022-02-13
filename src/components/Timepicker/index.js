import * as React from 'react';
import { withZero } from '../../helpers/time.helper';
import TimepickerInput from '../TimepickerInput';
import TimepickerSelectContainer from '../TimepickerSelectContainer';
import { TimePickerContainer } from './styles'

const TimePicker = _ => {
  const [active, setActive] = React.useState(true);
  const [hours, setHours] = React.useState('');
  const [minutes, setMinutes] = React.useState('')
  const [seconds, setSeconds] = React.useState('')

  const onFocusToggle = () => {
    // setActive(active => !active);
  }

  const onHourSelect = hours => {
    setHours(hours);
  }

  const onMinutesSelect = minutes => {
    setMinutes(minutes)
  }

  const onSecondsSelect = seconds => {
    setSeconds(seconds);
  }

  const onNowTimeSelect = () => {
    const now = new Date();

    setHours(withZero(now.getHours()))
    setMinutes(withZero(now.getMinutes()))
    setSeconds(withZero(now.getSeconds()))
  }

  return <TimePickerContainer>
    <TimepickerInput
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      onFocus={onFocusToggle}
      onBlur={onFocusToggle} />
    {active && <TimepickerSelectContainer
      onHourSelect={onHourSelect}
      onMinuteSelect={onMinutesSelect}
      onSecondSelect={onSecondsSelect}
      onNowTimeSelect={onNowTimeSelect} />}
  </TimePickerContainer>
}

export default TimePicker;