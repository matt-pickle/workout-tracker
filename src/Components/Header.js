import React from "react";
import Button from "./Button";
import "../Styles/Header.css";

function Header() {
  return (
    <div className="header">
      <Button text="HISTORY"
              link="/history"
      />
      <Button text="CURRENT"
              link="/"
      />
      <Button text="WEIGHT"
              link="/weight"
      />
    </div>
    
  )
}


export default Header;