import axios from 'axios';
import { CART_ADD_ITEM, CART_CHANGE_ITEM_QUANTITY, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from '../types';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    });

    localStorage.setItem('alpibo_cart_items', JSON.stringify(getState().cart.cartItems));
}

export const changeItemQuantity = (id, qty) => async (dispatch, getState) => {
    dispatch({
        type: CART_CHANGE_ITEM_QUANTITY,
        payload: {
            product: id,
            qty: qty
        }
    });

    localStorage.setItem('alpibo_cart_items', JSON.stringify(getState().cart.cartItems));
}

export const removeItemFromCart = id => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: {
            product: id
        }
    });

    localStorage.setItem('alpibo_cart_items', JSON.stringify(getState().cart.cartItems));
}

export const saveShippingAddress = data => async (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    });

    localStorage.setItem('alpibo_shipping_address', JSON.stringify(data));
}