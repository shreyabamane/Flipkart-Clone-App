import axios from 'axios';
import { CREATE_PAYMENT_SESSION_FAIL, CREATE_PAYMENT_SESSION_REQUEST, CREATE_PAYMENT_SESSION_SUCCESS } from "../constants/paymentConstants"

export const createCheckoutSession = (cartItems) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PAYMENT_SESSION_REQUEST });

        const { data } = await axios.post('http://localhost:8000/create-checkout-session', { cartItems});

        dispatch({
            type: CREATE_PAYMENT_SESSION_SUCCESS,
            payload: data.sessionId
        })

        return data.sessionId;
    } catch (error) {
        dispatch({
            type: CREATE_PAYMENT_SESSION_FAIL,
            payload: error.response?.data?.error || error.message
        });

    }
}