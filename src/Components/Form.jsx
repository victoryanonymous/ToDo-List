import React, { useState } from 'react';
import { MdOutlineEditNote } from "react-icons/md";
import './form.css'
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {


    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {id:todos.length, title:input,complete:false}])
        setInput("")
    }

    return (
        <form onSubmit={onFormSubmit} className='input-form'>
            <MdOutlineEditNote size={55}/>
            <input type="text" 
                value={input} 
                onChange={onInputChange} 
                required
                placeholder='Add Todo...'
                maxLength={150}
                autoComplete='off'
                className='input-field'
            />
            <button type='submit' className='btn btn-primary'>Add</button>
        </form>
    )
}

export default Form