import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LoginFormsContext } from '../../loginFormsContext';
import { GlobalLayoutContext } from '@/layouts/parts/GlobalLayoutContext';
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

const RegisterSubmitButton = ({registerData, clearFormValues}) => {

    const [login, { data, loading, error }] = useMutation(REGISTER_ACTION);

    const loginFormsContext = useContext(LoginFormsContext);
    const layoutContext = useContext(GlobalLayoutContext);

    const submit = async () => {
        const { email, password, name } = registerData;

        try {
            await login({
                variables: {
                    input: {
                        name: name.value,
                        email: email.value,
                        password: password.value
                    }
                } 
            });
        } catch (err) {
            layoutContext.showNotify({
                text: 'error || data'
            })
        } finally {
            console.log(data)
            if (!error && !data?.errors?.length && !loading) {
                clearFormValues();
                loginFormsContext.changeAuthMode(true);
            }
        }
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
    registerData: PropTypes.object,
    clearFormValues: PropTypes.func,
}

export default RegisterSubmitButton;