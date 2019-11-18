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
    if (e.target.value !== '') {
      dispatch({ type: 'ADD_TODO', payload: todo })
    }
    setTodo('')
  }

  return (
    <div>
      <form>
        <label htmlFor="todo">New Todo: </label>
        <input type="text" name="todo" value={todo} onChange={handleChange} />
        <input type="submit" value="Add To List" onClick={handleSubmit} />
      </form>
      <TodoList todos={state} />
    </div>
  )
}

export default AddTodoForm;
