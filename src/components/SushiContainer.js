import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ allSushi }) {
  //TODO: use a state to control what we're slicing 
  //TODO: create onClick function for more button to change the state/increment by 4 

  const [start, setStart] = useState(0)

  const handleClick = () => {
    setStart(start => start + 4)
  }

  return (
    <div className="belt">
      {allSushi.slice(start, start + 4).map(sushi => <Sushi key={sushi.id} {...sushi} /> )}
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
