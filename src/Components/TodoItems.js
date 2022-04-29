import React from 'react'
import Todo from './Todo'

const TodoItems = ({todo,onDelete}) => {
  return (
    <div>
 <h4>{ todo.sno}</h4>
    
     <h2>{todo.title}</h2>
     <h4>{ todo.disc}</h4>
     <button className="btn btn-primary btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItems
