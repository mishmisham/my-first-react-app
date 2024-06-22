import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

import { GlobalLayoutContext } from '@/layouts/parts/GlobalLayoutContext';
import {
    gql,
    useMutation
} from '@apollo/client';

const AUTH_ACTION = gql`
    mutation AuthAction($input: LoginInput!) {
        login(input: $input) {
            data {
                name
                id
                email
                accessToken
                refreshToken
            }
            errors {
                message
                errors
            }
        }
    }
`;

const AuthSubmitButton = ({authData}) => {

    const navigate = useNavigate();

    const [login] = useMutation(AUTH_ACTION, {
        onError: ({ operation, response, graphQLErrors, networkError }) => {
            layoutContext.showNotify({
                text: 'graphql error' + graphQLErrors.join(' ')
            })
        }
    });
    const layoutContext = useContext(GlobalLayoutContext);

    const submit = async () => {
        const { email, password } = authData;
        login({
            variables: {
                input: {
                    email: email.value,
                    password: password.value
                }
            } 
        }).then(response=>{

            const { errors, data } = response.data.login;
            
            if (errors) {
                layoutContext.showNotify({
                    text: errors.message
                })

                return;
            }

            // console.log(data)
            // Cookies.set('access', data.accessToken)
            // localStorage.setItem('token', data.refreshToken)
            // navigate('/');
        });
    }

    const computedStyle = {
        marginTop: '12px'
    }

    return (
        <button
            onClick={submit}
            className="btn btn--submit"
            style={computedStyle}
        >
            Login
        </button>
    )
}

AuthSubmitButton.propTypes = {
    authData: PropTypes.object
}

export default AuthSubmitButton;