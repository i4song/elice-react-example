import React, { useEffect, useState } from 'react';

import { Menu, Balance, TotalPrice } from './components'
import { menuDB } from "./db";

const App = () => {
  const [receipt, setReceipt] = useState([]);

  useEffect(() => {
    const initialReceipt = menuDB.map(menu => {
      return {...menu, count: 0};
    });
    setReceipt(initialReceipt);
  }, []);

  const updateReceipt = (menuId, delta) => {
    const prevReceipt = receipt;
    prevReceipt[menuId].count += delta;
    setReceipt(prevReceipt);
  }

  return (
    <div className="App">
      <Menu updateReceipt = {updateReceipt}/>
      <TotalPrice receipt = {receipt} initialBalance = {50000}/>
    </div>
  )
}

export default App;
