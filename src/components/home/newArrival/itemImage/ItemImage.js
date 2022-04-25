import React from "react";
import style from "./ItemImage.module.css";

function ItemImage({ newArrivals, activeArrival, setActiveArrival }) {
  return (
    <div className={style.itemImages}>
      <img
        src={newArrivals[activeArrival].itemImage}
        alt={newArrivals[activeArrival].itemImage}
        key={newArrivals[activeArrival].itemId}
      />
      <div>
        {newArrivals
          .filter((item) => item.itemId !== activeArrival)
          .map((item2) => (
            <img
              src={item2.itemImage}
              alt={item2.itemImage}
              key={item2.itemId}
              onClick={() => setActiveArrival(item2.itemId)}
            />
          ))}
      </div>
    </div>
  );
}

export default ItemImage;
