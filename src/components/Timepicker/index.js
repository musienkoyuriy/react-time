import * as React from 'react';
import timepickerContext from '../../providers/timepickerContext';
import TimepickerProvider from '../../providers/TimepickerProvider';
import TimepickerInput from '../TimepickerInput';
import TimepickerSelectContainer from '../TimepickerSelectContainer';
import { TimePickerContainer } from './styles'

const TimePicker = _ => {
  const timepickerCtx = React.useContext(timepickerContext)
  return <TimepickerProvider>
    <TimePickerContainer>
      <TimepickerInput />
      {timepickerCtx.active && <TimepickerSelectContainer />}
    </TimePickerContainer>
  </TimepickerProvider>

}

export default TimePicker;