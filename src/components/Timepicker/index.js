import { useCallback } from 'react';
import { useState } from 'react/cjs/react.development';
import TimepickerInput from '../TimepickerInput';
import TimepickerSelectContainer from '../TimepickerSelectContainer';
import { TimePickerContainer } from './styles'


const TimePicker = props => {
    const [active, setActive] = useState(true);
    const onFocusToggle = useCallback(() => {
        // setActive(active => !active);
    }, []);

    return <TimePickerContainer>
        <TimepickerInput value="00:11:22"
            onFocus={onFocusToggle}
            onBlur={onFocusToggle} />
        {active && <TimepickerSelectContainer />}
    </TimePickerContainer>
}

export default TimePicker;