import Constants from "./api/Constants";
import { Link } from "react-router-dom";

function Product(props){
    const {_id,image,unit,price,mrp,productName} = props.data
    return(
        <div class="col-sm-4">
          <div class="card">
            <img src={Constants.IMAGE_URL+image} alt="" className="card-top-image" />
            <div class="card-body">
              <h5 class="card-title">{productName}</h5>
              <p class="card-text">{unit}</p>
              <h2>
                <span>&#8377;</span>{price}
                <del><span>&#8377;</span>{mrp}</del>
              </h2>
              <Link to={ '/products/detail/'+ _id } class="btn btn-primary btn-block">
            Show Details
          </Link>
            </div>
          </div>
        </div>
    )
}

export default Product;