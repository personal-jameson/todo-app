import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { text: 'How are you', isCompleted: false },
    { text: 'Good morning', isCompleted: false },
    { text: 'What is your name', isCompleted: false },
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = todos.map((todo, _index) => {
      return _index === index ? { ...todo, isCompleted: true } : todo;
    });
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, _index) => _index !== index);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className='todo-list'>
        { todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <TodoForm
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}

export default App;
