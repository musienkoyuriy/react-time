import * as React from 'react';
import timepickerContext from '../../providers/timepickerContext';
import TimepickerProvider from '../../providers/TimepickerProvider';
import TimepickerInput from '../TimepickerInput';
import TimepickerSelectContainer from '../TimepickerSelectContainer';
import { TimePickerContainer } from './styles'

const TimePicker = ({ disabled }) => {
  const timepickerCtx = React.useContext(timepickerContext)
  return <TimepickerProvider>
    <TimePickerContainer>
      <TimepickerInput disabled={disabled}/>
      {timepickerCtx.active && <TimepickerSelectContainer />}
    </TimePickerContainer>
  </TimepickerProvider>

}

export default TimePicker;