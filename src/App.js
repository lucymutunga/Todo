import './App.css';
import Todos from './components/todos'
import {todolist} from './components/data';
import { useState } from 'react';
import NewTodo from './components/newTodo';

function App() {
  const [todos,settodos]=useState(todolist())
  
  return (
    <div className="App">
      <NewTodo settodos={settodos} todos={todos}/>
      <Todos todos={todos}/>
      </div>
  );
}

export default App;
