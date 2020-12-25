import { CART_ADD_ITEM, CART_CHANGE_ITEM_QUANTITY, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from '../types';

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;

            const itemInCart = state.cartItems.find(x => x.product === item.product);
            
            if (itemInCart) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => {
                        if (x.product === item.product) {
                            x.qty += parseInt(item.qty);
                            return x;
                        }

                        return x;
                    })
                };
            } else {    
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }
        case CART_CHANGE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    const localItem = JSON.parse(JSON.stringify(item));

                   if (item.product === action.payload.product) {
                        localItem.qty = action.payload.qty;
                   }

                   return localItem;
                })
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.product !== action.payload.product)
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        default:
            return state;
    }
}