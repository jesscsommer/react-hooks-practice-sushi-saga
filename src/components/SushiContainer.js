import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ allSushi }) {
  return (
    <div className="belt">
      {allSushi.map(sushi => <Sushi key={sushi.id} {...sushi} /> )}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
