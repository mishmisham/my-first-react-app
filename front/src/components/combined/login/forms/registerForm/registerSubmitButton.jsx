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
            data {
                name
            }
        }
    }
`;

const RegisterSubmitButton = ({registerData, clearFormValues}) => {

    const [register, { data, loading, error }] = useMutation(REGISTER_ACTION);

    const loginFormsContext = useContext(LoginFormsContext);
    const layoutContext = useContext(GlobalLayoutContext);

    const submit = async () => {
        const { email, password, name } = registerData;
        console.log(email, password, name)
        try {
            await register({
                variables: {
                    input: {
                        name: name.value,
                        email: email.value,
                        password: password.value
                    }
                } 
            }).then(response=>{
                const { errors, data } = response.data.register;

                if (errors) {
                    layoutContext.showNotify({
                        text: errors.message
                    });
                    return;
                }
                clearFormValues();
                loginFormsContext.changeAuthMode(true);

            });
        } catch (err) {
            layoutContext.showNotify({
                text: 'error || data'
            })
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