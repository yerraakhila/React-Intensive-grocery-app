import { useEffect, useState } from "react";
import axios from "axios";
import EndPoints from "../Components/api/Endpoints";
import Navbar from "./../Components/Navbar";
import Constants from "../Components/api/Constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import addToCart from "../redux/actions/CartActions";

function ProductDetailPage() {
  const {id} = useParams()
  
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(EndPoints.PRODUCT_BY_ID_URL + id)
      .then((response) => setProduct(response.data.data))
      .catch((error) => console.log(error));
  }, []);
  let dispatch = useDispatch()
  function handleAddToCart(){
      dispatch(addToCart(product))
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div style={{
            backgroundColor:'#fff',
            padding:'40px',
            marginTop:'80px',
            borderRadius:'10px'
            }}>
          <div class="row">
            <div class="col-sm-6">
                <img src={Constants.IMAGE_URL+product.image} alt="" className="img-fluid" />
            </div>
            <div class="col-sm-6">
                <h5>{product.productName}</h5>
                <p>{product.unit}</p>
                <p>{product.description}</p>
                <h2>
                    <span>&#8377;</span>
                    {product.price}
                    <span style={{
                        fontSize:'22px',
                        marginLeft:'10px',
                        color:'#888'
                    }}>
                        <del><span>&#8377;</span>{product.mrp}</del>
                    </span>
                </h2>
                <br></br>
                <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
