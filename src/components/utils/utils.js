import React from 'react';
import { findAllByPlaceholderText } from '@testing-library/react';


export const InputFieldContainer  = (props) => {
    const style = {
        width: props.size,
    }
    return (
        <div style={style} className="inputFieldContainer">
            {props.children}
        </div>
    )
}

export const TextInput = (props) => {
    let {
        label,
        placeholder
    } = props;
    if (placeholder==undefined) {
        placeholder = ""
    }
    return (
        <div className="textInput">
            <span className="textInput-label">{label}</span>
            <input 
                placeholder={placeholder}
                typep="text"
            />
        </div>
    )
}