import React from 'react';

const TodoList = props => {
  return (
    props.todos.map(todo => {
      return <h3 className={todo.style} onClick={props.toggleComplete}>{todo.item}</h3>;
    })
  )
}

export default TodoList;
