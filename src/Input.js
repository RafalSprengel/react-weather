import React from 'react';
import './Inputs.css';

const Input = ({ handleInput, handleFormSubmit, cityName }) => {

    return (
        <>
            <form id='form' onSubmit={handleFormSubmit}>
                <input
                    id='search'
                    placeholder='tap the city...'
                    onChange={handleInput}
                    value={cityName}
                ></input>
                <button type='submit' id='submit-but'>Search...</button>
            </form>
        </>
    )
}
export default Input;