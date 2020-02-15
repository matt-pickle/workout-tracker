import React, {useState} from "react";
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
    <button className={`button ${hoverClass}`}
            onMouseEnter={hover}
            onMouseLeave={unHover}
            onTouchStart={hover}
            onTouchEnd={unHover}
            onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default Button