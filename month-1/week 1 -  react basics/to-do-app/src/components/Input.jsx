export function Input() {
  return (
    <div id="input-field">
      <label htmlFor="task">Enter the task</label>
      <input type="text" name="task" id="task" />
      <button type="submit">Add Task</button>
    </div>
  );
}
