import * as React from 'react';
import timepickerContext from '../../providers/timepickerContext';
import { Input } from './styles';

const TimepickerInput = ({
  placeholder = 'Select time',
  onChange,
  onFocus,
  onBlur,
}) => {
  const [timeValue, setTimeValue] = React.useState('00:00:00');
  const timepickerCtx = React.useContext(timepickerContext);
  const { hours, minutes, seconds } = timepickerCtx;

  React.useEffect(() => {
    if (!hours && !minutes && !seconds) {
      return;
    }

    const h = hours || '00';
    const m = minutes || '00';
    const s = seconds || '00';

    setTimeValue(`${h}:${m}:${s}`);
  }, [hours, minutes, seconds]);

  const onChangeHandler = (e) => {
    const timeValue = e.target.value;
    setTimeValue(timeValue)
    onChange(timeValue)
  }

  return <Input>
    <input type="text"
      value={timeValue}
      placeholder={placeholder}
      onChange={onChangeHandler}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </Input>
};

export default TimepickerInput;