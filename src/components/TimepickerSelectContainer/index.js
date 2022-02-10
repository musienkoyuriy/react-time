import { UNITS_OF_TIME } from "../../constants/units"
import TimepickerSelect from "../TimepickerSelect"
import TimepickerNavbar from '../TimepickerNavbar';
import { Container } from "./styles";

const TimepickerSelectContainer = ({
    hoursTimeStep,
    minutesTimeStep,
    secondsTimeStep,
    onHourSelect,
    onMinuteSelect,
    onSecondSelect,
    onNowTimeSelect
}) => {
    return <Container>
        <TimepickerSelect unitOfTime={UNITS_OF_TIME.HOUR}
            timeStep={hoursTimeStep}
            onSelect={onHourSelect}
        />
        <TimepickerSelect unitOfTime={UNITS_OF_TIME.MINUTE}
            timeStep={minutesTimeStep}
            onSelect={onMinuteSelect}
        />
        <TimepickerSelect unitOfTime={UNITS_OF_TIME.SECOND}
            timeStep={secondsTimeStep}
            onSelect={onSecondSelect}
        />
        <TimepickerNavbar onNowTimeSelect={onNowTimeSelect}/>
    </Container>
}

export default TimepickerSelectContainer;