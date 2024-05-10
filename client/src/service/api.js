import axios from 'axios';

const URL = 'http://localhost:8000';

export async function authenticateSignup(data){
    try {
       return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log('Error while calling signup api',error);
    }
}

export async function authenticateLogin(data){
    try {
       return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log('Error while calling login api',error);
        return error.response;
    }
}

// for payment
export async function payUsingPaytm(data){
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling payment api',error );
    }
}
