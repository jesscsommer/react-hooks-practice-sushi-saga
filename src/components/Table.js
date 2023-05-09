import React from "react";
import WalletForm from "./WalletForm";

const Table = ({ plates = [], money, addMoney }) => {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
        <WalletForm addMoney={addMoney} /> 
      </div>
    </>
  );
}

export default Table;
