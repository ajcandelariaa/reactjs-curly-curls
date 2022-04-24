import React from 'react'
import style from "./ItemImage.module.css";

function ItemImage({newArrivals, activeArrival, setActiveArrival}) {
  return (
    <div className={style.itemImages}>
      <div>
        <img src={newArrivals[activeArrival].itemImage} alt={newArrivals[activeArrival].itemImage}/>
      </div>
      
      <div>
        <img src={newArrivals[1].itemImage} alt={newArrivals[activeArrival].itemImage}/>
        <img src={newArrivals[2].itemImage} alt={newArrivals[activeArrival].itemImage}/>
      </div>
    </div>
  )
}

export default ItemImage