import React from 'react'
import SubProductsImages from './SubProductsImages'
import style from "./SubProducts.module.css";

function SubProducts({products, title}) {
  return (
    <div className={`${style.container}`}>
      <div className={style.content}>
        <p>{title}</p>
        <div className={style.product_mages}>
          {
            
            products.map((product) => {
              console.log(product)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SubProducts