export function Input(props) {
  return (
    <form id="input-field" onSubmit={props.handler}>
      <label htmlFor="task">Enter the task</label>
      <input type="text" name="task" id="task" />
      <button type="submit">Add Task</button>
    </form>
  );
}
