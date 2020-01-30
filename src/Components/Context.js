import React, {useState} from "react";

const Context = React.createContext();

function Provider(props) {
  const [workout, setWorkout] = useState({})
  
  function saveWorkout(key, value) {
    setWorkout({...workout, [key]: value});
  }

  return (
    <Context.Provider value={{saveWorkout: saveWorkout}}>
      {props.children}
    </Context.Provider>
  )
}

export {Provider, Context};