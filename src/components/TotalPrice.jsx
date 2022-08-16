import React, { useEffect, useState } from "react";

const TotalPrice = ({receipt, initialBalance}) => {
  const [isUpdated, setIsUpdated] = useState(0);
  const [priceSum, setPriceSum] = useState(0);

  useEffect(() => {
    const sum = receipt.reduce(
      (prev, curr) => (prev + curr.price*curr.count), 0
    );
    setPriceSum(sum);
  }, [isUpdated]);

  const refresh = () => {
    setIsUpdated(isUpdated => isUpdated + 1);
  }
  return (
    <div className="TotalPrice">
      <button onClick={refresh}>총 가격 </button> : {priceSum}
      <p>남는 돈: {initialBalance - priceSum} </p>
    </div>
  );
}

export default TotalPrice;