import { CART_ADD_ITEM, CART_CHANGE_ITEM_QUANTITY, CART_REMOVE_ITEM } from '../types';

export const cartReducer = (state = { cartItems: []}, action) => {
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
        default:
            return state;
    }
}