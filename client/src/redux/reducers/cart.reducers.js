import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../types';

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
        default:
            return state;
    }
}