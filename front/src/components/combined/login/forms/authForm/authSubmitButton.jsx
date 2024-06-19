import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import {
    gql,
    useMutation
} from '@apollo/client';

const AUTH_ACTION = gql`
    mutation AuthAction($input: LoginInput!) {
        login(input: $input) {
            id
            name
            email
            refreshToken
            accessToken
        }
    }
`;

const AuthSubmitButton = ({authData}) => {

    const navigate = useNavigate();

    const [login, { data, loading, error }] = useMutation(AUTH_ACTION);

    const submit = async () => {
        const { email, password } = authData;

        login({
            variables: {
                input: {
                    email: email.value,
                    password: password.value
                }
            } 
        });
        
        navigate('/');
        // console.log(data, loading, error)
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