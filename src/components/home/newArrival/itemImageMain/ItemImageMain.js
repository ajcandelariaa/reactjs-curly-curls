import React from "react";
import style from "./ItemImageMain.module.css";

function ItemImage({ newArrivals, activeArrival }) {
  return (
    <div className={style.imagesContainer}>
      <img
        src={newArrivals[activeArrival].itemImage}
        alt={newArrivals[activeArrival].itemImage}
      />
    </div>
  );
}

export default ItemImage;
