import React, { Component, useState } from 'react';
import './todo.css'
import TodoForm from './TodoForm';
import Form from './Form';

const Todo = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    
    return (
        <section className="main-container">
            <h1 className="todolist-header">TODO List</h1>
            <Form 
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
            />
            <TodoForm 
                todos={todos}
                setTodos={setTodos}
                completeTodos={completeTodos}
                setCompleteTodos={setCompleteTodos}
            />
        </section>

    )
}

export default Todo