// AddTask.jsx
import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddButtonClick = () => {
    if (newTask.trim() !== "") {
      // Call the parent component's event handler
      onAddTask(newTask);
      // Clear the input field
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddButtonClick}>Add Task</button>
    </div>
  );
}

export default AddTask;
