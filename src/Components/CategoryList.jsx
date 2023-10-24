import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import EndPoints from "./api/Endpoints";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(EndPoints.CATEGORY_URL)
      .then((Response) => setCategories(Response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">CategoryList</h2 ><br/>
      <div class="row">
        {
            categories.map((category)=> <Category data={category}/>)
        }
      </div>
    </div>
  );
}

export default CategoryList;
