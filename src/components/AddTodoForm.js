import React, { useState, useReducer } from 'react';
import { reducer, todos } from '../reducers/reducer.js';
import TodoList from './TodoList.js';

const AddTodoForm = props => {
  const [todo, setTodo] = useState();
  const [state, dispatch] = useReducer(reducer, todos)

  const handleChange = e => {
    setTodo(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (todo) {
      dispatch({ type: 'ADD_TODO', payload: todo })
      setTodo('');
    }
  }

  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_TODOS' })
    let completed = document.querySelectorAll(".complete");
    completed.forEach(item => item.classList.remove("complete"))
  }

  const toggleComplete = e => {
    dispatch({ type: 'COMPLETE_TODO', payload: e.target.innerHTML })
    console.log(state);
    e.target.classList.contains("complete") ? e.target.classList.remove("complete") : e.target.classList.add("complete");
  }

  return (
    <div>
      <form>
        <label htmlFor="todo">New Todo: </label>
        <input type="text" name="todo" value={todo} onChange={handleChange} />
        <input type="submit" value="Add To List" onClick={handleSubmit} />
        <input type="submit" value="Remove Completed" onClick={handleClear} />
      </form>
      <TodoList todos={state} toggleComplete={toggleComplete} />
    </div>
  )
}

export default AddTodoForm;
