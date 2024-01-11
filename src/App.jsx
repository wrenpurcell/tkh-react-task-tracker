import { useState } from 'react'
import './App.css'

import AddTask from "./components/AddTask.jsx"
import DisplayTasks from "./components/DisplayTasks.jsx"
import Footer from "./components/Footer.jsx"

function App() {
const [tasks, setTasks] = useState([]);

// Event handler for adding a new task
const handleAddTask = (newTask) => {
  setTasks([...tasks, newTask]);
};

return (
  <div className='container'>
    {/* Render AddTask component and pass the handleAddTask function as a prop */}
    <AddTask onAddTask={handleAddTask} />
    <DisplayTasks tasks={tasks} />
    <Footer />
  </div>
);
}

export default App
