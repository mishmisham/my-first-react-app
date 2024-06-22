import { configureStore } from "@reduxjs/toolkit";
import reducers from "@/store/reducers";

export default async () => {

    const store = configureStore({
        reducer: reducers,
        initialData: window.__INITIAL_STATE__,
        // devTools: process.env.NODE_ENV !== 'production',
    });

    delete window.__INITIAL_STATE__;
    
    return store;
};
