import { ADD_PRODUCTS_DATA } from "../action/action_types";

const initialState = {
    products : []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCTS_DATA:
            return {...state, products: action.payload}
        default: return state;
    }
}

export default reducer;
