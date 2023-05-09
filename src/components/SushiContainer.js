import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

const SushiContainer = ({ allSushi, spendMoney, money }) => {

  const [start, setStart] = useState(0)

  const handleClick = () => {
    setStart(start => start + 4)
  }

  return (
    <div className="belt">
      {allSushi.slice(start, start + 4).map(sushi => <Sushi key={sushi.id} {...sushi} spendMoney={spendMoney} money={money}/> )}
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
