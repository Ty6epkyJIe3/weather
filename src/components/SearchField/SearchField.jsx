import { InputStyled, ButtonStyled } from './SearchField.styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {requestData} from "../../store/reducers/geocoding.slice";


export const SearchField = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSubmitOnClick = () => {
        if (value.trim()) {
            dispatch(requestData(value.trim()));
            setValue('');
        }
    };

    const handleSubmitOnKeyDown = (e) => {
        if ((e.key === 'Enter' && (value.trim()))) {
            dispatch(requestData(value.trim()));
            setValue('');
        }
    };

    return (
        <div>
            <InputStyled
                type="text"
                placeholder="Печатайте тут..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleSubmitOnKeyDown}
            />
            <ButtonStyled onClick={handleSubmitOnClick}>
                +
            </ButtonStyled>
        </div>
    );
};