import { UNITS_OF_TIME } from "../../constants/units"
import TimepickerSelect from "../TimepickerSelect"
import { Container } from "./styles";

const TimepickerSelectContainer = ({ hoursTimeStep, minutesTimeStep, secondsTimeStep }) => {
    return <Container>
        <TimepickerSelect unitOfTime={UNITS_OF_TIME.HOUR} timeStep={hoursTimeStep} />
        <TimepickerSelect unitOfTime={UNITS_OF_TIME.MINUTE} timeStep={minutesTimeStep} />
        <TimepickerSelect unitOfTime={UNITS_OF_TIME.SECOND} timeStep={secondsTimeStep} />
    </Container>
}

export default TimepickerSelectContainer;