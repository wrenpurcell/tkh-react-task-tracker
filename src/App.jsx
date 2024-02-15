import { useState } from 'react'
import './App.css'

//import the componets 
import AddTask from "./components/AddTask.jsx"
import DisplayTasks from "./components/DisplayTasks.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  //state 
  //tasks starts out as empty array - whatever is in the () of useState() is the starting value so in this case, is is an empty array
  //setTasks is a function that takes in a value, and sets tasks to that value
const [tasks, setTasks] = useState([]);


// Event handler for adding a new task
// passed down to AddTask component as a prop
//defined in App.jsx, used in AddTask.jsx 
// will be called onAddTask in AddTask.jsx, bc that is the prop name
//takes in a new task, and adds it to tasks array (state variable)
const handleAddTask = (newTask) => {
  //make a new array from old tasks (tasks)
  //add newTask to tasks array
  //update the value of tasks to be the old tasks and the new task 
  setTasks([...tasks, newTask]);
  //kind of like pushing a new element into an array 
  //tasks.push(newTask)
};

return (
  <div className='container'>
    {/* Render AddTask component and pass the handleAddTask function as a prop */}
    {/* AddTask takes in the new task from the input field and adds it to tasks state variable which is an array */}
    <AddTask onAddTask={handleAddTask} />
    {/* DisplayTasks takes the state variable tasks, and displays them */}
    <DisplayTasks tasks={tasks} />
    <Footer />
  </div>
);
}

export default App
