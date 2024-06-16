import React, { useState } from 'react';

import InputText from '@/components/primitives/inputText/InputText';
import './registerForm.sass';

const RegisterForm = () => {

    const [authData, setAuthData] = useState({
        name: {
            value: '',
            label: 'Name',
            placeholder: 'Enter your name',
            type: 'text',
            field: 'name'
        },
        email: {
            value: '',
            label: 'Email',
            placeholder: 'Enter your email',
            type: 'text',
            field: 'email'
        },
        password: {
            value: '',
            label: 'Password',
            placeholder: 'Enter your password',
            type: 'password',
            field: 'password'
        }
    });

    const onInput = (val, field) => {
        const fieldObject = authData[field];
        fieldObject.value = val;

        setAuthData({
            ...authData,
            [field]: fieldObject
        });
    };

    return (
        <div className='register-form'>
            <h2>Registration</h2>
            {Object.keys(authData).map((inputKey, key) => {
                const  {
                    value,
                    label,
                    placeholder,
                    type,
                    field
                } = authData[inputKey];

                return (
                    <InputText
                        value={value}
                        label={label}
                        placeholder={placeholder}
                        type={type}
                        key={key}
                        onInput={(newValue)=>onInput(newValue, field)}
                    />
                )
            })}
            
        </div>
    )
}

export default RegisterForm;