import React, {useState} from "react";
import Lift from "./Lift";

function Home() {
  const [lifts, setLifts] = useState([1]);

  function addLift() {
    const newLiftNum = lifts.length + 1;
    setLifts(prev => [...prev, newLiftNum]);
  }

  const allLifts = lifts.map(liftNum => {
    return <Lift />
  })

  return (
    <div>
      {allLifts}
      <button onClick={addLift}>Add Lift</button>
    </div>
  )
}


export default Home;