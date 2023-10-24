import {createStore} from 'redux';
import CartReducer from './reducers/CartReducer';

const store = createStore(CartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;