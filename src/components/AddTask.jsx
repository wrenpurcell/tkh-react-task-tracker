// AddTask.jsx
import React, { useState } from "react";

function AddTask({ onAddTask }) {
  //onAddTask is the prop name
  //its value was passed as handleAddTask from App component
  //so to use it here, we call it onAddTask

  //state to hold the task typed into the input field
  //set to an empty string initially - useState("")
  const [newTask, setNewTask] = useState("");

  //function that runs when the Add Task button is clicked 
  const handleAddButtonClick = () => {
    //cut off any whitespace before or after string typed into input field
    if (newTask.trim() !== "") {
      // Call the parent component's event handler 
      //pass it the new task from the input field
      // onAddTask will put the new task into the tasks array (tasks is the state variable)
      onAddTask(newTask);
      // Clear the input field
      setNewTask("");
    }
  };

  return (
    <div>
      {/* input is where user types in a new task  */}
      <input
        type="text"
        //set value to newTask to clear the input field
        value={newTask}
        //onChange is an event that is triggered any time there is a change in the input field text (adding or backspacing characters)
        //using the event object (e) pass the value of the input field to setNewTask
        //e.target is the input - the element that triggered the event
        //e.target.value is the value currently typed into the input
        onChange={(e) => setNewTask(e.target.value)}
      />
      {/* handleAddButtonClick uses onAddTask to take the new task, and put it into the list of tasks in the state variable tasks
        the new task has already been stored into newTask - setNewTask(e.target.value)
        handleAddButtonClick calls onAddTask 
        onAddTask puts the new task into the tasks state variable 
      */}
      <button onClick={handleAddButtonClick}>Add Task</button>
    </div>
  );
}

export default AddTask;
