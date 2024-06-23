
import { ACCESS_TOKEN_TIMEOUT } from '@/config/config.js';
import Cookies from 'js-cookie';
const REFRESH_JWT_TOKEN = `
    mutation RefreshJWTToken($input: RefreshTokensInput!) {
        refreshTokens(input: $input) {
            data {
                refreshToken
                accessToken
            }
            errors {
                message
                errors
            }
        }
    }
`;

export const refreshJWT = async () => {
    const qlHost = process.env.GRAPHQL_HOST;

    try {
        const refresh_token = localStorage.getItem('refreshToken');

        if (!refresh_token) {
            return;
        }

        let response = await fetch(qlHost, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: REFRESH_JWT_TOKEN,
                variables: {
                    input: {
                        refresh_token
                    }
                }
            }),
        });

        response = await response.json();

        const issetData = response?.data?.refreshTokens?.data
            && !response.errors 
            && !response?.data?.refreshTokens?.errors
            && response?.data?.refreshTokens?.data.refreshToken
            && response?.data?.refreshTokens?.data.accessToken;
            
        if (issetData) {
            Cookies.set('token', response.data.refreshTokens.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshTokens.data.refreshToken)
            return response.data.refreshTokens.data;
        } else {
            // localStorage.removeItem('refreshToken');
            // Cookies.set('token', '');
            // window.location.href = '/';
        }

        return null;
       
    } catch(err) {
        return null;
    }
}

export const runJWTRefresher = () => {
    // секунду на обновление токена
    const safeRefreshTimeout = ACCESS_TOKEN_TIMEOUT - 1000;
   
    if (window.__refreshJWTTimeout__) {
        clearTimeout(window.__refreshJWTTimeout__);
    }

    window.__refreshJWTTimeout__ = setTimeout(() => {
        refreshJWT();
        runJWTRefresher();
    }, safeRefreshTimeout)
}
