import { configureStore } from "@reduxjs/toolkit";
import reducers from "@/store/reducers";

export default async () => {

    const store = configureStore({
        reducer: reducers,
        preloadedState: window.__INITIAL_STATE__,
        // devTools: process.env.NODE_ENV !== 'production',
    });

    delete window.__INITIAL_STATE__;

    // const refreshToken = localStorage.getItem('refreshToken');

    // console.log('refreshToken', refreshToken)
    // console.log('store', store)
    
    return store;
};
