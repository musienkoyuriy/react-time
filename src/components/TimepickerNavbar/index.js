import { Link, Navbar } from "./styles"

const TimepickerNavbar = ({ onChange }) => {
  const setNowTime = () => {
    onChange(new Date().getTime())
  }
  return <Navbar>
    <a onClick={setNowTime}>Now</a>
  </Navbar>
}

export default TimepickerNavbar;