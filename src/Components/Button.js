import React from "react";
import {Link} from "react-router-dom";


function Button(props) {
  return (
    <Link to={props.link}>
      <button>{props.text}</button>
    </Link>
  )
}


export default Button;