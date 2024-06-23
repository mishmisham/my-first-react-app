import { configureStore } from "@reduxjs/toolkit";
import reducers from "@/store/reducers";
import Cookies from 'js-cookie';
import { reAuthorizeWithJWT } from '@/graphql/reAuthorizeWithJWT.js';
import { runJWTRefresher } from '@/graphql/refreshJWT.js';

// авторизационные коррекции на фронте
const onBeforeInitStoreMiddleware = async () => {

    const currentState = window.__INITIAL_STATE__;

    let isAuthorized = false;

    // если авторизовались через куку на сервере - сохраним в localStorage новое значение
    if ('refreshToken' in currentState.user.about) {
        localStorage.setItem('refreshToken', currentState.user.about.refreshToken);
        delete window.__INITIAL_STATE__.user.about.refreshToken;
        isAuthorized = true;
    }
    if ('accessToken' in currentState.user.about) {
        Cookies.set('token', currentState.user.about.accessToken)
        delete window.__INITIAL_STATE__.user.about.accessToken;
        isAuthorized = true;
    }

    // если не авторизовались но в localStorage есть refreshToken - пробуем авторизоваться через него
    const refreshToken = localStorage.getItem('refreshToken');
    if (!('id' in currentState.user.about) && refreshToken) {
        const userData = await reAuthorizeWithJWT(refreshToken, 'refreshToken');
        
        if (userData) {
            localStorage.setItem('refreshToken', userData.refreshToken);
            Cookies.set('token', userData.accessToken);

            delete userData.refreshToken;
            delete userData.accessToken;

            window.__INITIAL_STATE__.user.about = {
                ...window.__INITIAL_STATE__.user.about,
                ...userData
            }

            isAuthorized = true;
        }
    }

    if (isAuthorized) {
        // обновление access и refresh по таймауту
        runJWTRefresher();
    }
}

export default async () => {

    await onBeforeInitStoreMiddleware();

    const store = configureStore({
        reducer: reducers,
        preloadedState: window.__INITIAL_STATE__,
        // devTools: process.env.NODE_ENV !== 'production',
    });
   
    delete window.__INITIAL_STATE__;

    return store;
};
