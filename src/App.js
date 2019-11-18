import React from 'react';
import { todos } from './reducers/reducer.js';
import './App.css';

//Components
import AddTodoForm from './components/AddTodoForm.js';

function App() {
  return (
    <div className="App">
      <AddTodoForm todos={todos} />
    </div>
  );
}

export default App;
