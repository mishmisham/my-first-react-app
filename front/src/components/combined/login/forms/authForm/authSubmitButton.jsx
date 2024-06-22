import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setupUser } from "@/store/reducers/user/userReducer.js"
import { useNavigate } from "react-router-dom";
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
    const dispatch = useDispatch();

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
                });
                return;
            }

            localStorage.setItem('refreshToken', data.refreshToken);

            delete data.refreshToken;
            delete data.__typename;

            dispatch(setupUser(data));
            navigate('/');
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