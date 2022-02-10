import { Navbar } from "./styles"

const TimepickerNavbar = ({ onNowTimeSelect }) => {
  return <Navbar>
    <div>
      <a onClick={onNowTimeSelect}>Now</a>
    </div>
    <div>
      <button>OK</button>
    </div>
  </Navbar>
};

export default TimepickerNavbar;