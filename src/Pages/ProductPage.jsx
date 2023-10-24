import Navbar from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import SubCategory from "../Components/SubCategory";

function ProductPage(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <SubCategory/>
                    </div>
                    <div className="col-md-9">
                        <ProductList/>  
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default ProductPage;