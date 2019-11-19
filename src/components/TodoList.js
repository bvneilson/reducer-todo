import React from 'react';

const TodoList = props => {
  return (
    props.todos.map((todo, index) => {
      return <h3 onClick={props.toggleComplete} key={index}>{todo.item}</h3>;
    })
  )
}

export default TodoList;
