import React from 'react';
import PropTypes from 'prop-types';

import {
    gql,
    useMutation
} from '@apollo/client';

const REGISTER_ACTION = gql`
    mutation RegisterAction($input: RegisterInput!) {
        register(input: $input) {
            name
            email
        }
    }
`;



const RegisterSubmitButton = ({registerData}) => {

    const [login, { data, loading, error }] = useMutation(REGISTER_ACTION);

    const submit = () => {
        const { email, password, name } = registerData;

        login({
            variables: {
                input: {
                    name: name.value,
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
            Register
        </button>
    )
}

RegisterSubmitButton.propTypes = {
    registerData: PropTypes.object
}

export default RegisterSubmitButton;