import * as React from 'react';
import { Navbar } from "./styles"
import timepickerContext from '../../providers/timepickerContext'

const TimepickerNavbar = _ => {
  const timepickerCtx = React.useContext(timepickerContext);
  return <Navbar>
    <div>
      <a onClick={timepickerCtx.onNowTimeSelect}>Now</a>
    </div>
    <div>
      <button>OK</button>
    </div>
  </Navbar>
};

export default React.memo(TimepickerNavbar);