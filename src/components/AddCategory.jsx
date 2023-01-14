import React from 'react'
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue ] = useState('Death Note');

    const onInputChange = (event)=>{
        setinputValue(event.target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault();

        if(inputValue.trim().length <=1) return;
        //Estos son los casos donse conviene cambiar el estado con un callback
        // setCategories(c => [inputValue, ...c])
        onNewCategory(inputValue.trim())
        setinputValue('');
    }
  return (
    <form onSubmit={event => onSubmit(event)}>

        <input 
            type="text"
            placeholder='Buscar Gif'
            value={inputValue}
            onChange={event=> onInputChange(event)}
            
        />
    </form>
  )
}
