import React from "react";
import style from "./ItemImages.module.css";

function ItemImages({ newArrivals, activeArrival, setActiveArrival }) {
  return (
    <div className={style.newArrivals}>
      <img src={newArrivals[activeArrival].itemImage} alt="mainImage" />
      <div className={style.newArrivalsSub}>
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

export default ItemImages;
