import React from 'react'
import { NavLink } from "react-router-dom";
import style from './MainProductsImages.module.css'

function MainProductsImages({product}) {
  return (
    <div className={style.content} >
        <NavLink to={product.itemLink} target="_blank" rel="noreferrer">
          <img src={product.itemImage} alt={product.itemImage} />
          <p>{product.itemCategory}</p>
        </NavLink>
    </div>
  )
}

export default MainProductsImages