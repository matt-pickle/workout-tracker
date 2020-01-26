import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div>
      <Button text="History"
              link="/history"
      />
      <Button text="Current"
              link="/"
      />
      <Button text="Weight"
              link="/weight"
      />
    </div>
    
  )
}


export default Header;