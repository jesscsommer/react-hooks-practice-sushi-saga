import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

const App = () => {

  //! Get sushi and save to state
  const [allSushi, setAllSushi] = useState([])

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setAllSushi(data))
  }, [])

  //! Set initial budget and allow updates 
  const [money, setMoney] = useState(30)
  const spendMoney = (amountSpent) => {
      setMoney(money => money - amountSpent)
  }
  const addMoney = (amountAdded) => {
      setMoney(money => money + amountAdded)
  }

  return (
    <div className="app">
      <SushiContainer allSushi={allSushi} spendMoney={spendMoney} money={money} />
      <Table money={money} addMoney={addMoney} />
    </div>
  );
}

export default App;
