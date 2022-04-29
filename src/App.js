
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import TodoItems from "./Components/TodoItems";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() { var initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I am deleted of todo" , todo);
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.getItem("todos",JSON.stringify(todos));
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  const addTodo=(title,disc)=>{
    // const sno= todos[todos.length-1].sno+1;
    const myTodo={
      // sno:sno,
      title:title,

      disc:disc
  };
  console.log(myTodo);
  setTodos([...todos,myTodo]);
   
 
  }
  return (
    <>
    <Router>
    <Navbar title={"MY TODO"}/>

    <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                  <AddTodo addTodo={addTodo}/>
  <Todo todos={todos} onDelete={onDelete} sno={todos.length}/>
              </>)
            
          }}>
           </Route>

           <Route exact path="/about" render={()=>{
            return(
              <>
              <About/>
              </>)
            
          }}>
           </Route>
        
          
        </Switch>
 
  {/* <TodoItems/> */}
 
    </Router>
  
   </>
  );
}

export default App;
