import React from 'react';
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

    const [login, { data, loading, error }] = useMutation(AUTH_ACTION);

    const submit = () => {
        const { email, password } = authData;

        login({
            variables: {
                input: {
                    email: email.value,
                    password: password.value
                }
            } 
        });

        console.log(data, loading, error)
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

export default AuthSubmitButton;