import React, { useState } from 'react';
import RegisterSubmitButton from './registerSubmitButton';
import InputText from '@/components/primitives/inputText/InputText';
import { ClientOnly } from "react-client-only";
import './registerForm.sass';

const RegisterForm = () => {

    const [registerData, setRegisterData] = useState({
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
        const fieldObject = registerData[field];
        fieldObject.value = val;

        setRegisterData({
            ...registerData,
            [field]: fieldObject
        });
    };

    return (
        <div className='register-form'>
            <h2>Registration</h2>
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
                <RegisterSubmitButton registerData={registerData}/>
            </ClientOnly>
        </div>
    )
}

export default RegisterForm;