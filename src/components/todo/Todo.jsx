import React, { useEffect, useState } from 'react'
import './todo.css'
const Todo = () => {
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
      return JSON.parse(savedTodos);
    }else{
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  function handleInputChange(e){
    setTodo(e.target.value);
  }
  function handleFormSubmit(e){
    e.preventDefault();
    if(todo !== ''){
      setTodos([...todos, {
        id: todos.length + 1,
        text: todo.trim() 
      }])
    }
    setTodo('');
  }
  function handleComplete(id){
    const removeItem = todos.filter((todo)=>{
      return todo.id !== id;
    });
    setTodos(removeItem);
  }
  return (
    <div>
      <div className="goal-page">
      <div className="goal-form">
        <p>Hi Rajdev, <br /> What's Your Today's Goal?</p>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name='todo'value={todo} onChange={handleInputChange} placeholder='Create A Todo' />
      </form>

      <div className="coder">Activator | Rajdev Yadav | 2023</div>
      </div>
      
      <div className="goals-container">
      <ul className="todo-list">
        {
          todos.map((todo)=> (<li key={todo.key} >{todo.text} <button onClick={()=>handleComplete(todo.id)}>Complete</button> </li>))
        }
      </ul>
      </div>
      </div>
      

    </div>
  )
}

export default Todo
