import React from 'react';

// components
import TodoList from './components/TodoList';
import Header from './components/Header';
import TodoForm from './components/TodoForm';

import './App.css';

const App = () => {
  
  return (
    <div>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
