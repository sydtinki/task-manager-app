// TaskList.js
import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;
