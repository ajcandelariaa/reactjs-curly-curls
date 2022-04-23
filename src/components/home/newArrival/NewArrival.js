import React from "react";
import style from "./NewArrival.module.css";

function NewArrival() {
  return (
    <div className={style.container}>
      <div className={style.newArrival}>
        <p>New Arriaval</p>
        <p>Click here for more products {">>"}</p>
      </div>
    </div>
  );
}

export default NewArrival;
