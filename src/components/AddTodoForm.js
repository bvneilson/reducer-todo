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

  const toggleComplete = e => {
    dispatch({ type: 'COMPLETE_TODO', payload: e.target.innerHTML })
    console.log(state);
  }

  return (
    <div>
      <form>
        <label htmlFor="todo">New Todo: </label>
        <input type="text" name="todo" value={todo} onChange={handleChange} />
        <input type="submit" value="Add To List" onClick={handleSubmit} />
      </form>
      <TodoList todos={state} toggleComplete={toggleComplete} />
    </div>
  )
}

export default AddTodoForm;
