import * as actionType from '../constants/cartConstant';

export const cartReducer = (state = { CartItems: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.CartItems.find(product => product.id === item.id);

            if (exist) {
                return { ...state, CartItems: state.CartItems.map(data => data.id === item.id ? item : data) }
            } else {
                return { ...state, CartItems: [...state.CartItems, item] }
            }

        case actionType.REMOVE_FROM_CART:
            return { ...state, CartItems: state.CartItems.filter(product => product.id !== action.payload) }

        case actionType.INCREMENT_QUANTITY:
            return {
                ...state,
                CartItems: state.CartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            }

        case actionType.DECREMENT_QUANTITY:
            return {
                ...state,
                CartItems: state.CartItems.map(item =>
                    item.id === action.payload && item.quantity > 1 ?
                        { ...item, quantity: item.quantity - 1 } : item
                )
            }

        default:
            return state;
    }
}