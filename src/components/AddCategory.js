import React, { useState } from 'react';
import PropTypes from 'prop-types'

 const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputText = (text) => {
        setInputValue(text)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length < 2) return;
        console.log(e);
        setCategories( cats => [inputValue,...cats])
        setInputValue('')
    }


    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange= {text => handleInputText(text.target.value)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;