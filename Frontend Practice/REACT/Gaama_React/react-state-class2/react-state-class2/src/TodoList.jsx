import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
         let [todos,setTodos] =useState([{task : "sampletask" , id :uuidv4()}]);

         let[newTodo, setNewTodo] =useState("");

         let addNewTask =() =>{
            console.log("we have to add new task in todo");
            setTodos((prevTodos) => {
               return  [...prevTodos ,{task :newTodo ,id : uuidv4()}]
            });
            setNewTodo(""); // to empty again placeholder 
         }
         
         let updateTodoValue= (event) =>{
            setNewTodo(event.target.value);
         }

         let deleteTodo =(id) =>{
            setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id!=id));
             
         }

         let upperCaseAll= () =>{
            setTodos((prevTodos) =>(
                prevTodos.map((todo) =>{
                    return{...todo ,
                        task :todo.task.toUpperCase()}
                })
             ));
         }
         
       

    return(
        <div>
            <input Placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) =>(    // map method is used to render a array based on each individual item
                       <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>UPPERCASE ALL</button>
        </div>
    );
}

//--------------------------------------------------------------------------

// Arrow functions can return values in two ways:

// 1.Explicit Return   	num => { return num * num }	✅
// 2. Implicit Return  	num => num * num	✅
// Implicit (with ())	num => (num * num)	✅
// Curly braces without return	num => { num * num }	❌ undefined