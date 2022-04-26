import React, { useState } from "react";
import ItemDescription from "../itemDescription/ItemDescription";
import style from "./NewArrival.module.css";
import { getNewArrival } from "../../../../helpers/HomeData";
import ItemImageMain from "../itemImageMain/ItemImageMain";
import ItemImageSub from "../itemImageSub/ItemImageSub";

function NewArrival() {
  const newArrivals = getNewArrival;
  const [activeArrival, setActiveArrival] = useState(0);

  return (
    <div className={style.container}>
      <div className={style.newArrival}>
        <p>New Arriaval</p>
        <p>Click here for more products {">>"}</p>
        <div className={style.newArrivalContent}>
          <ItemImageMain newArrivals={newArrivals} activeArrival={activeArrival}/>
          <ItemImageSub newArrivals={newArrivals} activeArrival={activeArrival} setActiveArrival={setActiveArrival} />
          <ItemDescription newArrivals={newArrivals} activeArrival={activeArrival} />
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
