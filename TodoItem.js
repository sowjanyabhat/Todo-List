import React from 'react';

function TodoItem({ task, toggleTask, removeTask }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => toggleTask(task.id)}>
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
}

export default TodoItem;
