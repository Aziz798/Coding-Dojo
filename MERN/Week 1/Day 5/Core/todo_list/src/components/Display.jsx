import React from 'react';

const Display = ({ tasks, setDelete }) => {
    const deleteTask = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, deleted: true } : task
        );
        setDelete(updatedTasks);
    };

    const markAsDone = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setDelete(updatedTasks);
    };

    return (
        <div>
            {tasks
                .filter((task) => !task.deleted)
                .map((task) => (
                    <div key={task.id}>
                        <p style={task.completed ? { textDecoration: 'line-through' } : {}}>{task.task}</p>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => markAsDone(task.id)}
                        />
                    </div>
                ))}
        </div>
    );
};

export default Display;
