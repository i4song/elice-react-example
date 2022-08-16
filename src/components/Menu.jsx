import React from "react";

import MenuItem from "./MenuItem";
import { menuDB } from "../db";

const Menu = ({updateReceipt}) => {
  return (
    <div className="Menu">
      {menuDB.map(menu => {
        return <MenuItem key= {menu.id} menuId = {menu.id} updateReceipt = {updateReceipt}/>
      })}
    </div>
  )
}

export default Menu;