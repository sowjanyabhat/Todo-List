import React, { useState } from 'react';
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoList 
        tasks={tasks} 
        addTask={addTask} 
        toggleTask={toggleTask} 
        removeTask={removeTask} 
      />
    </div>
  );
}

export default App;
