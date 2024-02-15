// DisplayTasks.jsx

//take in tasks state variable as a prop, being passed from App component
//destructure tasks from prop object inline so we don't have to write props.tasks
function DisplayTasks({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {/* map over tasks (it is an array holding our tasks) and display each one in an li element */}
        {tasks.map((task, index) => (
          // react will give an error in the console if you don't include the key prop, but it won't break your app 
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTasks;
