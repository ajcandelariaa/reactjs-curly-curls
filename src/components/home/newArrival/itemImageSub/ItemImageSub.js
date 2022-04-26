import React from "react";
import style from "./ItemImageSub.module.css";

function ItemImageSub({ newArrivals, activeArrival, setActiveArrival }) {
  return (
    <div className={style.imagesContainer}>
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
  );
}

export default ItemImageSub;
