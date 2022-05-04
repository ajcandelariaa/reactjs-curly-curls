import React from "react";
import style from "./SubProductsImages.module.css";

function SubProductsImages({ product }) {
  return (
    <div className={style.content}>
      <img src={product.itemImage} alt={product.itemImage} />
      <p>{product.itemName}</p>
    </div>
  );
}

export default SubProductsImages;
