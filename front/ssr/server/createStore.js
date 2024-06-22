import { configureStore } from "@reduxjs/toolkit";
import { withExtraArgument } from "redux-thunk"
import { matchRoutes } from 'react-router-dom';
import axios from "axios";
import reducers from "@/store/reducers";
import { setupUser } from "@/store/reducers/user/userReducer.js"
import { routesArray } from '@/routes/routesData.js';
import { getCookie } from '@/utils/getCookie.js';
import { reAuthorizeWithJWT } from '@/graphql/reAuthorizeWithJWT.js';
export default async (req, res) => {
    // const axiosInstance = axios.create({
    //     baseURL: '/',
    //     headers: {
    //         cookie: req.get('cookie') || '',
    //     },
    // });

    const store = configureStore({
        reducer: reducers,
        // middleware: ()=>[withExtraArgument(axiosInstance)],
        // devTools: process.env.NODE_ENV !== 'production',
    });

    const accessToken = getCookie('token', req.get('cookie'))
    if (accessToken) {
        const userData = await reAuthorizeWithJWT(accessToken, 'accessToken', req, res)
        if (userData) {
            store.dispatch(setupUser(userData))
        }
    }

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
