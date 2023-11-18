import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const middleware = [thunk];

const store = configureStore({
    middleware,
    reducer : {
        root: rootReducer,
    }
})

export default store;
