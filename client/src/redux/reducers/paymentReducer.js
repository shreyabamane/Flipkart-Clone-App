import { CREATE_PAYMENT_SESSION_FAIL, CREATE_PAYMENT_SESSION_REQUEST, CREATE_PAYMENT_SESSION_SUCCESS } from "../constants/paymentConstants";

const initialState = {
     loading: false, 
     sessionId: null,
      error: null 
    }

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PAYMENT_SESSION_REQUEST:
            return { ...state, loading: true };

        case CREATE_PAYMENT_SESSION_SUCCESS:
            return { ...state, loading: false, sessionId: action.payload };

        case CREATE_PAYMENT_SESSION_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}