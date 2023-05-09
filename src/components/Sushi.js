import React, { useState } from "react";

const Sushi = ({ name, img_url, price, spendMoney, money }) => {

  const [isEaten, setIsEaten] = useState(false)
  const eatSushi = () => {
    setIsEaten(true)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => {
        if (money < price) {
          alert('No free meals!')
        } else {
          spendMoney(price)
          eatSushi()
        }
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
