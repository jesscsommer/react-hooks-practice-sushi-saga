import React, { useState } from "react";

function Sushi({ name, img_url, price, spendMoney }) {

  const [isEaten, setIsEaten] = useState(false)
  const eatSushi = () => {
    setIsEaten(true)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => {
        eatSushi()
        spendMoney(price)
      }}>
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
