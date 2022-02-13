import * as React from "react";
import { UNITS_OF_TIME } from "../../constants/units"
import TimepickerSelect from "../TimepickerSelect"
import TimepickerNavbar from '../TimepickerNavbar';
import { Container } from "./styles";
import timepickerContext from '../../providers/timepickerContext';

const TimepickerSelectContainer = ({
    hoursTimeStep,
    minutesTimeStep,
    secondsTimeStep
}) => {
    const timepickerCtx = React.useContext(timepickerContext);

    return <Container>
        <TimepickerSelect unitOfTime={UNITS_OF_TIME.HOUR}
            timeStep={hoursTimeStep}
            onSelect={timepickerCtx.onHourSelect}
        />
        <TimepickerSelect unitOfTime={UNITS_OF_TIME.MINUTE}
            timeStep={minutesTimeStep}
            onSelect={timepickerCtx.onMinutesSelect}
        />
        <TimepickerSelect unitOfTime={UNITS_OF_TIME.SECOND}
            timeStep={secondsTimeStep}
            onSelect={timepickerCtx.onSecondsSelect}
        />
        <TimepickerNavbar />
    </Container>
}

export default TimepickerSelectContainer;