import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";
import EndPoints from "./api/Endpoints";
import { useParams } from "react-router-dom";

function ProductList() {
  const {catId} = useParams()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(EndPoints.PRODUCT_BY_CATEGORY_ID_URL + catId)
      .then((Response) => setProducts(Response.data.data))
      .catch((error) => console.log(error));
  },[catId]);
  return (
    <div>
      <h2>Product List</h2>
      <div class="row">
        {
            products.map((product)=>
                <Product data={product}/>
            )
        }
      </div>
    </div>
  );
}

export default ProductList;
