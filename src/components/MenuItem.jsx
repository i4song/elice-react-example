import React, { useState } from "react";
import { menuDB } from "../db";

const MenuItem = ({ menuId, updateReceipt }) => {
  const menu = menuDB[menuId];
  const [count, setCount] = useState(0);

  const handleIncreaseClick = () => {
    updateReceipt(menuId, 1);
    setCount(count => count + 1);
  };
  const handleDecreaseClick = () => {
    if(count === 0) return;
    updateReceipt(menuId, -1);
    setCount(count => count - 1);
  };

  return (
    <div className="MenuItem" id = {`MenuItem ${menuId}`}>
      <span>{`${menu.price}원 ${menu.name}: `}</span>
      <span>{`${count}`}</span>
      <button onClick={handleIncreaseClick}>추가</button>
      <button onClick={handleDecreaseClick}>감소</button>
    </div>
  );
};

export default MenuItem;