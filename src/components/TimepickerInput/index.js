import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Input } from './styles';

const TimepickerInput = ({
  placeholder = 'Select time',
  onChange,
  onFocus,
  onBlur,
  hours,
  minutes,
  seconds
}) => {
  const [timeValue, setTimeValue] = useState('00:00:00');

  useEffect(() => {
    if (!hours && !minutes && !seconds) {
      return;
    }

    hours = hours || '00';
    minutes = minutes || '00';
    seconds = seconds || '00';
    
    setTimeValue(`${hours}:${minutes}:${seconds}`);
  }, [hours, minutes, seconds]);

  const onChangeHandler = (e) => {
    const timeValue = e.target.value;
    setTimeValue(timeValue)
    onChange(timeValue)
  }

  console.log(timeValue);
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