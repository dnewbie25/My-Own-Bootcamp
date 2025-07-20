import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  /**
   * Handles the submission of the input form. Prevents the default form behavior
   * and adds the new task to the state.
   * @param {React.FormEvent<HTMLFormElement>} formData The form data from the
   * input form.
   */
  function handleInput(formData) {
    formData.preventDefault();
    setTasks((prevTasks) => [...prevTasks, formData.target[0].value]);
  }
  return (
    <main>
      <h1>Easy To-Do App</h1>
      <Input handler={handleInput} />
      <section id="tasks">
        {/* Mapping over the tasks array and returning a new Task component
        for each item with the task as a prop. The key prop is set to a
        unique identifier using crypto.randomUUID(). This ensures that
        React can keep track of the components and their associated state. */}
        {tasks.map((task) => (
          <Task task={task} key={crypto.randomUUID()} />
        ))}
      </section>
    </main>
  );
}

export default App;
