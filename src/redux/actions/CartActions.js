function addToCart(product){
    return(
        {
            type:"addToCart",
            payload: product
        }
    )
}

export default addToCart;