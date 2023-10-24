import axios from "axios";
import { useEffect, useState } from "react";
import EndPoints from "./api/Endpoints";
import { useParams } from "react-router-dom";

function SubCategory() {
  const {catId} = useParams()
  const [SubCategories, setsubCategories] = useState([]);
  useEffect(() => {
    axios
      .get(EndPoints.SUB_CATEGORY_URL+ catId)
      .then((Response) => setsubCategories(Response.data.data))
      .catch((error) => console.log(error));
  }, [catId]);
  return (
    <div>
      <h2 className="text-center">SubCategory</h2>
      <ul class="list-group">
        {SubCategories.map((subCategory)=>
            <li class="list-group-item">{subCategory.subName}</li>
        )}
      </ul>
    </div>
  );
}
export default SubCategory;
