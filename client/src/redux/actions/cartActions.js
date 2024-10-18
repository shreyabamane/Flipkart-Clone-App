import axios from "axios";

import * as actionType from '../constants/cartConstant';

const URL = 'https://flipkart-clone-server-k65t.onrender.com';

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({
            type: actionType.ADD_TO_CART,
            payload: { ...data, quantity }
        });
    } catch (error) {
        dispatch({
            type: actionType.ADD_TO_CART_ERROR,
            payload: error.message
        });
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionType.REMOVE_FROM_CART,
        payload: id
    });
}

export const incrementQuantity = (id) => (dispatch) => {
    dispatch({
        type: actionType.INCREMENT_QUANTITY,
        payload: id
    })
}

export const decrementQuantity = (id) => (dispatch) => {
    dispatch({
        type: actionType.DECREMENT_QUANTITY,
        payload: id
    })
}

export const updateItemQuantity = (id, quantity) => (dispatch) => {
    dispatch({
        type: actionType.UPDATE_ITEM_QUANTITY,
        payload: { id, quantity }
    });
};