import React, { useState } from 'react';
import AuthSubmitButton from './authSubmitButton';
import InputText from '@/components/primitives/inputText/InputText';
import { authFormFields } from './authFormFields';
import './authForm.sass';
import { ClientOnly } from "react-client-only";

const AuthForm = () => {

    const [authData, setAuthData] = useState({...authFormFields});

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

            <ClientOnly>
                <AuthSubmitButton authData={authData}/>
            </ClientOnly>
        </div>
    )
}

export default AuthForm;