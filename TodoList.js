import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, addTask, toggleTask, removeTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            removeTask={removeTask} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
