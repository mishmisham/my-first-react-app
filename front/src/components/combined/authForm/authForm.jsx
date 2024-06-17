import React, { useState, useEffect } from 'react';
import AuthSubmitButton from './authSubmitButton';
import InputText from '@/components/primitives/inputText/InputText';
import './authForm.sass';

const AuthForm = () => {

    // client-only - just for render login button
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    const [authData, setAuthData] = useState({
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
        <div className='auth-form'>
            
            <h2>Please login</h2>

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

            {showChild && <AuthSubmitButton authData={authData}/>}
        </div>
    )
}

export default AuthForm;