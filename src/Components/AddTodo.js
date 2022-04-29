import React from 'react'
import { useState } from "react";
const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [disc, setDisc] = useState("")
    // const[sno,setSno]=useState("")
          const submit=(e)=>{
     e.preventDefault();
     if(!title || !disc)
     {
        alert("Title or Discription can not be blank");
     }
     else{
         props.addTodo(title,disc);
      setTitle("");
      setDisc("");
     }
    }
  return (
    <>
    <h3 className='text-center my-4'>Hi! Add your todo</h3>
      <form className='container my-2' onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Todo Title</label>
    <input type="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="htmlForm-control mx-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Discription</label>
    <input type="text" value={disc}  onChange={(e)=>{setDisc(e.target.value)}} className="htmlForm-control mx-2" id="exampleInputPassword1"/>
  </div>
  {/* <div className="mb-3 htmlForm-check"> */}
    {/* <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1"> */}
    {/* <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label/</input>> */}
  {/* </div> */}
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </>
  )
}

export default AddTodo
