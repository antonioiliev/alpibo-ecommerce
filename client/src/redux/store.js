import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './reducers/product.reducers';
import { cartReducer } from './reducers/cart.reducers';
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './reducers/user.reducers';
import { orderCreateReducer, orderDetailsReducer } from './reducers/order.reducers';

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('alpibo_cart_items') ? JSON.parse(localStorage.getItem('alpibo_cart_items')) : [];

const userInfoFromLocalStorage = localStorage.getItem('alpibo_user') ? JSON.parse(localStorage.getItem('alpibo_user')) : {};
const shippingAddressFromLocalStorage = localStorage.getItem('alpibo_shipping_address') ? JSON.parse(localStorage.getItem('alpibo_shipping_address')) : {};

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage
    },
    userLogin: { 
        user: userInfoFromLocalStorage
    }
};

const middleware = [thunk];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;