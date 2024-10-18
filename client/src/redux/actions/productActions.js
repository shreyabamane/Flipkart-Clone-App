import axios from "axios";

import * as actionTypes from '../constants/productConstant';
// import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "../constants/productConstant";


const URL = 'https://flipkart-clone-server-k65t.onrender.com';

export const getProducts = () => async (dispatch) => {

    try {
        const {data} = await axios.get(`${URL}/products`);
        
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
       dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })
    }
}


export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});

      const {data} = await axios.get(`${URL}/product/${id}`);

      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data })      
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message })
    }
}







//object distructure
// let obj = {
//     config: {},
//     data: [],
//     headers: {},
//     status: 200,
//     message: ''
// }
// obj.data
// {data}=obj;
