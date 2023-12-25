import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [
    {
      id: uuidv4(),
      task: 'Complete Python stack',
      completed: false,
      deleted: false,
    },
    {
      id: uuidv4(),
      task: 'Complete React course',
      completed: false,
      deleted: false,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Form setTasks={setTasks} tasks={tasks} />
      <Display tasks={tasks} setDelete={setTasks} />
    </div>
  );
}

export default App;
