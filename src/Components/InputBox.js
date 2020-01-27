import React, {useState, useEffect} from "react";

function InputBox(props) {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  function handleChange(event) {
    setInput(event.target.value);
  }
  
  useEffect(() => {
    setData({
      [props.name]: input
    })
  }, [input]);

  return (
    <input type="text"
           placeholder={props.name}
           value={input}
           onChange={handleChange}
    />
  )
}


export default InputBox;