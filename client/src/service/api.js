import axios from 'axios';

const URL = 'https://flipkart-clone-server-k65t.onrender.com'; 


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

