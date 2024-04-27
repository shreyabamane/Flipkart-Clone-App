import axios from "axios";

import * as actionTypes from '../constants/productConstant';
// import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "../constants/productConstant";


const URL = `http://localhost:8000`;

export const getProducts = () => async (dispatch) => {

    try {
        const {data} = await axios.get(`${URL}/products`);
        
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
       dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })
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