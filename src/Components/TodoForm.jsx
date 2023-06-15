import React, { useState, useEffect, useRef } from "react";
import { TiTickOutline } from "react-icons/ti";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from "react-icons/ri";

import "./todoform.css";

const TodoForm = ({todos, setTodos, completeTodos, setCompleteTodos}) => {
 
  const handleDelete = (id) => {
    setTodos(
      todos.filter(todo => todo.id!==id)
    )
  }

  const handleUpdate = (todo) => {
    console.log('Update List Item')
    
  }

  const handleComplete = (todo) => {
    if(!todo.complete) {
      setCompleteTodos([...completeTodos, todo])
      todo.complete=true
      handleDelete(todo.id);
    }
  }

  const handleCompleteDelete = (todo) => {
    setCompleteTodos(
      completeTodos.filter(todoc => todoc.id!=todo.id)
    )
    todo.complete=false;
  }

  return (
    <>
    <div className="todo-input-form">
      <div className="todos-list">
      {todos.length!=0?"":<h3>Todo List is Empty</h3>}
        {
          todos.map((todo,index)=>(
            <li key={index}>
              <input type="text" 
                value={todo.title} 
                onChange={(e)=> e.preventDefault()} 
                className="todo-input-edit"
              />
              <MdDeleteOutline onClick={()=>handleDelete(todo.id)} size={35} className="logo logo-delete"/>
              {/* <MdModeEditOutline onClick={()=>handleUpdate(todo)} size={35} className="logo logo-update"/> */}
              <TiTickOutline onClick={()=> handleComplete(todo)} size={35} className="logo logo-complete"/>
            </li>
          ))
        }
      </div>
      <div className="completed-todos-list">
        {completeTodos.length!=0?<h1>Completed Task</h1>:""}
        {
          completeTodos.map((todo,index)=>(
            <li key={index}>
              <input type="text" value={todo.title} onChange={(e)=> e.preventDefault()} className="todo-input-complete"/>
              <MdDeleteOutline onClick={()=>handleCompleteDelete(todo)} size={35} className="logo logo-delete"/>
            </li>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default TodoForm
