import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../Styles/Button.css";

function Button(props) {
  const [hoverClass, setHoverClass] = useState("");

  function hover() {
    setHoverClass("hovered");
  }

  function unHover() {
    setHoverClass("");
  }

  return (
    <Link to={props.link}>
      <button className={`navButton ${hoverClass}`}
              onMouseEnter={hover}
              onMouseLeave={unHover}
              onTouchStart={hover}
              onTouchEnd={unHover}
      >
        {props.text}
      </button>
    </Link>
  )
}


export default Button;