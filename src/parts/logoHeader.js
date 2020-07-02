import React from "react";
import Logo from "assets/images/Logo-header.svg";
import Button from "elements/Button";

export default function logoHeader() {
  return (
    <Button clasName="logo-header" href="" type="link">
      <img src={Logo} alt="togoo" width="100" height="auto"></img>
    </Button>
  );
}
