import React from 'react'
import style from './MainProductsImages.module.css'

function MainProductsImages({product}) {
  return (
    <div className={style.content}>
        <img src={product.itemImage} alt={product.itemImage} />
    </div>
  )
}

export default MainProductsImages