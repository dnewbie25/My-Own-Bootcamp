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
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        task: formData.target[0].value,
        id: crypto.randomUUID(),
        editable: false,
      },
    ]);
  }

  /**
   * Deletes an item from the tasks array based on the id of the item. The
   * itemToDelete argument is the id of the item to be deleted.
   * @param {string} itemToDelete The id of the item to be deleted.
   */
  function deleteItem(itemToDelete) {
    setTasks((prev) => prev.filter((item) => item.id !== itemToDelete));
  }

  /**
   * Updates the task with the new value from the content editable element.
   * Retrieves the current text content from the editable ref and calls the
   * edit function passed in props with the updated task value.
   * @param {object} itemToEdit The task object with an id and task property.
   */
  function editItem(itemToEdit) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === itemToEdit.id
          ? { ...task, task: itemToEdit.task, editable: !itemToEdit.editable }
          : task
      )
    );
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
        {tasks.map((task) => {
          return (
            <Task
              task={task.task}
              key={task.id}
              id={task.id}
              editable={task.editable}
              delete={() => deleteItem(task.id)}
              edit={editItem}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
