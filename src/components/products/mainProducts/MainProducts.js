import React from 'react'
import style from './MainProducts.module.css'
import {getProduct} from "../../../helpers/ProductsData";
import MainProductsImages from './MainProductsImages';

function MainProducts() {
  return (
    <div className={`${style.container} products`}>
      <div className={style.content}>
        <p>Products</p>
        <div className={style.product_mages}>
          {
            getProduct.map((product) => <MainProductsImages product={product} key={product.itemId} />)
          }
        </div>
      </div>
    </div>
  )
}

export default MainProducts