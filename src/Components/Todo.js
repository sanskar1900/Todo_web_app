import React from 'react'
import TodoItems from './TodoItems'
const todo = (props) => {
  var x={
    color:"grey"
  }
  return (
    <div className="container">
     <h1 className='text-center my-4'>Todos List</h1>
     {props.todos.length===0?<h3 className='text-center' style={x}>No Todos To Display</h3>:
     props.todos.map((todo)=>{
      return <TodoItems todo={todo} key={todo.sno} sno={todo.sno} onDelete={props.onDelete}/>
    })}
     
    
    </div>
  )
}

export default todo
