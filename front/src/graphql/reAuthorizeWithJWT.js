import { ACCESS_TOKEN_TIMEOUT } from '@/config/config.js';
const REFETCH_WITH_ACCESS_TOKEN = `
    mutation ContinueWithAccessToken($input: ReAuthByTokenInput!) {
        reAuthorize(input: $input) {
            data {
                name
                id
                email
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

export const reAuthorizeWithJWT = async (token, mode='accessToken', req=null, res=null) => {
    const qlHost = process.env.GRAPHQL_HOST;
    try {
        let response = await fetch(qlHost, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: REFETCH_WITH_ACCESS_TOKEN,
                variables: {
                    input: {
                        token,
                        mode
                    }
                }
            }),
        });

        response = await response.json();

        const issetData = response?.data?.reAuthorize?.data && !response.errors && !response?.data?.reAuthorize?.errors;

        if (issetData && res) {
            res.cookie('token', response.data.reAuthorize.data.accessToken, {
                maxAge: ACCESS_TOKEN_TIMEOUT,
            });
        }
        if (issetData) {
            return response.data.reAuthorize.data;
        }

        return null;
       
    } catch(err) {
        return null;
    }
}