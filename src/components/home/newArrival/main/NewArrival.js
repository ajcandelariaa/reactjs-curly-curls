import React, { useState } from "react";
import ItemDescription from "../itemDescription/ItemDescription";
import style from "./NewArrival.module.css";
import { getNewArrival } from "../../../../helpers/HomeData";
import ItemImages from "../itemImages/ItemImages";

function NewArrival() {
  const newArrivals = getNewArrival;
  const [activeArrival, setActiveArrival] = useState(0);

  return (
    <div className={style.container}>
      <div className={style.newArrival}>
        <p className={style.text}>New Arrival <span>Click here for more products {">>"}</span></p>
        <div className={style.newArrivalContent}>
          <ItemImages newArrivals={newArrivals} activeArrival={activeArrival} setActiveArrival={setActiveArrival} />
          <ItemDescription newArrivals={newArrivals} activeArrival={activeArrival} />
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
