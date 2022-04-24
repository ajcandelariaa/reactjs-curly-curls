import React, { useState } from "react";
import ItemDescription from "../itemDescription/ItemDescription";
import ItemImage from "../itemImage/ItemImage";
import style from "./NewArrival.module.css";
import { getNewArrival } from "../../../../helpers/HomeData";

function NewArrival() {
  const newArrivals = getNewArrival;
  const [activeArrival, setActiveArrival] = useState(0);

  return (
    <div className={style.container}>
      <div className={style.newArrival}>
        <p>New Arriaval</p>
        <p>Click here for more products {">>"}</p>
        <div className={style.newArrivalContent}>
          <ItemImage newArrivals={newArrivals} activeArrival={activeArrival} setActiveArrival={setActiveArrival} />
          <ItemDescription newArrivals={newArrivals} activeArrival={activeArrival} />
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
