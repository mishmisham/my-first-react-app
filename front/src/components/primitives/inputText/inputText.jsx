import React, { useState } from 'react';
import './inputText.sass';

const InputText = (props) => {

    const label = props.label ? (<label>{props.label}</label>) : null;
    
    const emitInput = (e) => {
        const value = e.target.value;
        props.onInput(value, e);
    }

    return (
        <div className="input-text">
            { label }
            <input
                type={props.type || 'text'}
                value={props.value}
                placeholder={props.placeholder || ''}
                onInput={emitInput}
            />
        </div>
    )
}

export default InputText;