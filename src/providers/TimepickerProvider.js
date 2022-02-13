import * as React from 'react';
import { withZero } from '../helpers/time.helper';
import timepickerContext from './timepickerContext';

const TimepickerProvider = ({ children }) => {
    const [active, setActive] = React.useState(true);
    const [hours, setHours] = React.useState('');
    const [minutes, setMinutes] = React.useState('')
    const [seconds, setSeconds] = React.useState('')

    const onFocusToggle = () => {
        // setActive(active => !active);
    }

    const onHourSelect = React.useCallback(hours => {
        setHours(hours);
    }, [hours]);

    const onMinutesSelect = React.useCallback(minutes => {
        setMinutes(minutes)
    }, [minutes]);

    const onSecondsSelect = React.useCallback(seconds => {
        setSeconds(seconds);
    }, [seconds]);

    const onNowTimeSelect = React.useCallback(() => {
        const now = new Date();

        setHours(withZero(now.getHours()))
        setMinutes(withZero(now.getMinutes()))
        setSeconds(withZero(now.getSeconds()));
    }, []);

    const timepickerInitialContext = {
        hours, minutes, seconds, active,
        onHourSelect, onMinutesSelect, onSecondsSelect,
        onNowTimeSelect, onFocusToggle
    }
    return (
        <>
            <timepickerContext.Provider value={timepickerInitialContext}>
                {children}
            </timepickerContext.Provider>
        </>
    )
}

export default TimepickerProvider;