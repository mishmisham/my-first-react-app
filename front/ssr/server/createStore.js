import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { withExtraArgument } from "redux-thunk"
import { matchRoutes } from 'react-router-dom';
import axios from "axios";
import reducers from "../../src/store/reducers";
import { routesArray } from '../../src/routes/routesData.js';

export default async (req) => {
    const axiosInstance = axios.create({
        baseURL: '/',
        headers: {
            cookie: req.get('cookie') || '',
        },
    });

    const store = configureStore({
        reducer: reducers,
        // middleware:()=>[applyMiddleware(withExtraArgument(axiosInstance))],
        devTools: process.env.NODE_ENV !== 'production',
    });
    
    const PromiseArray = matchRoutes(routesArray, req.path);

    let promises = [];

    const promiseList = PromiseArray ? PromiseArray.map(({ route }) => {
        return route && route?.loadData ? route?.loadData(store) : null;
    }) : null;
    
    if (promiseList) {
        promises = [...promises, promiseList.map((promise) => {
            if (promise) {
                    return new Promise((resolve, reject) => {
                        promise.then(resolve).catch(resolve);
                    });
                }
            })
        ];
    }

    await Promise.all(promises);

    return store;
};
