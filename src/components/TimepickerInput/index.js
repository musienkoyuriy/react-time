import React, { useState } from 'react';
import { Input } from './styles';

const TimepickerInput = ({
  placeholder = 'Select time',
  onChange,
  onFocus,
  onBlur,
  value
}) => {
  const [timeValue, setTimeValue] = useState(value);

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