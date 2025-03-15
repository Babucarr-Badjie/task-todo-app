import { useState } from "react";
import NewTask from "./Components/NewTask";
import TaskList from "./Components/TaskList";

function App() {
  // define states
  const [newTask, setNewTask] = useState({});
  const [allTask, setAllTask] = useState([]);
  const [ok, setOk] = useState("");

  // event handlers functions
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prevTask) => ({
      ...prevTask,
      id: Date.now(),
      [name]: value,
    }));
  };

  const handleDeleteTask = (taskToDelete) => {
    setAllTask((prevTask) =>
      prevTask.filter((task) => task.id !== taskToDelete)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title) return;
    setAllTask((prevTask) => [newTask, ...prevTask]);
    setNewTask({});
  };

  return (
    <main>
      <h1>Todo Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TaskList allTasks={allTask} handleDeleteTask={handleDeleteTask} />
    </main>
  );
}

export default App;
