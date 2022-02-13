import React from "react";

const timepickerContext = React.createContext({
    hour: '00',
    minutes: '00',
    seconds: '00',
    active: true,
    onHourSelect: () => { },
    onMinutesSelect: () => { },
    onSecondsSelect: () => { },
    onNowTimeSelect: () => { },
    onFocusToggle: () => { }
});

export default timepickerContext;
