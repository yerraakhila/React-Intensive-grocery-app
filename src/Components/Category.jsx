import Constants from "./api/Constants";
import { Link } from "react-router-dom";

function Category(props) {
  let { catId, catName, catImage } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <img src={Constants.IMAGE_URL+catImage} alt="" width="200" className="card-top-image" />
          <br/>
          <br/>
          <h5 class="card-title">{catName}</h5>
          <Link to={"/products/"+ catId} class="btn btn-primary btn-block">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
