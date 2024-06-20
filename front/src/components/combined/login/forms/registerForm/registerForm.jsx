import React, { useState } from 'react';
import RegisterSubmitButton from './registerSubmitButton';
import InputText from '@/components/primitives/inputText/InputText';
import { ClientOnly } from "react-client-only";
import { registerFormFields } from './registerFormFields'

import './registerForm.sass';

const RegisterForm = () => {

    const [registerData, setRegisterData] = useState(
        JSON.parse(JSON.stringify({...registerFormFields}))
    );

    const onInput = (val, field) => {
        const fieldObject = registerData[field];
        fieldObject.value = val;

        setRegisterData({
            ...registerData,
            [field]: fieldObject
        });
    };

    const clearFormValues = () => {
        setRegisterData({
            ...registerFormFields
        });
    }

    return (
        <div className='register-form'>
            {Object.keys(registerData).map((inputKey, key) => {
                const  {
                    value,
                    label,
                    placeholder,
                    type,
                    field
                } = registerData[inputKey];

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
                <RegisterSubmitButton
                    registerData={registerData}
                    clearFormValues={clearFormValues}
                />
            </ClientOnly>
        </div>
    )
}

export default RegisterForm;