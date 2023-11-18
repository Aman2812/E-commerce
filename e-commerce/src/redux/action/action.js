import axios from 'axios';
import { ADD_PRODUCTS_DATA } from './action_types';

export const addProductsData = () => {
    return async function(dispatch) {
        const response = await axios({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'get',
        })
        dispatch({
            type: ADD_PRODUCTS_DATA,
            payload: response.data
        })
    }
}