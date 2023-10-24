const initialState = {
  cartItemsNum: 0,
  cartItemsList: [],
};

function CartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "getCart":
      return {
        ...state,
      };
    case "addToCart":
      if (state.cartItemsNum === 0) {
        let item = {
          ...payload,
          quantity: 1
        };
        state.cartItemsList.push(item);
      } else {
        let check = false;
        state.cartItemsList.map((item, index) => {
          if (item._id === payload._id) {
            state.cartItemsList[index].quantity++;
            check = true;
          }
        });
        if (check === false) {
          let item = {
            ...payload,
            quantity: 1,
          };
          state.cartItemsList.push(item);
        }
      }
      return {...state,
         cartItemsNum : state.cartItemsNum+1}
    default:
        return state;
  }
}

export default CartReducer;
