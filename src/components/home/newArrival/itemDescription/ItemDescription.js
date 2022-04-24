import React from "react";
import style from "./ItemDescription.module.css";

function ItemDescription({newArrivals, activeArrival}) {
  return (
    <div>
      <p className={style.itemDescription}>{newArrivals[activeArrival].itemDescription}</p>
    </div>
  );
}

export default ItemDescription;
