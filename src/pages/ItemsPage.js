import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import SubProducts from "../components/products/subProducts/SubProducts";
import { getProduct } from "../helpers/ProductsData";

function ItemsPage() {
  const { productName } = useParams();
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("Project | ");
  const navigate = useNavigate();

  useEffect(() => {
    const data = getProduct.filter(
      (product) => product.itemLinkName === productName
    );

    if (data.length === 0) {
      navigate(`/projects-${productName}`, { replace: true });
    } else {
      console.log(data[0].subItems);
      setProducts(data[0].subItems);
      setTitle(`Products | ${data[0].itemCategory}`);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <SubProducts products={products} title={title}/>
    </div>
  );
}

export default ItemsPage;
