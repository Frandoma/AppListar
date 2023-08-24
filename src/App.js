import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: tasks.length + 1,
        content: newTask,
      };

      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>ACTIVIDAD LISTA DE ACTIVIDAD</h2>
       <div className="form">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.content}
            <button onClick={() => handleDeleteTask(task.id)}>
            <span className="material-icons">delete</span>
            </button>
          </li>
        ))}
      </ul>
      <h2>FRANKLIN DORIA - IVÁN BENITEZ</h2>
    </div>
  );
}

export default App;
