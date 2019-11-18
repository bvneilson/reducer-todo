import React, { useReducer } from 'react';
import { reducer, todos } from '../reducers/reducer.js';

const TodoList = () => {
  return (
    todos.map(todo => {
      return <h3>{todo.item}</h3>;
    })
  )
}

export default TodoList;
