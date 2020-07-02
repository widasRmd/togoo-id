import React from "react";

import Button from "elements/Button";
import Arrowright from "assets/images/Arrow-right.svg";

export default function ButtonRegister() {
  return (
    <Button className="btn-register btn btn-light" type="button">
      Register
      <img src={Arrowright} alt="arrow"></img>
    </Button>
  );
}
