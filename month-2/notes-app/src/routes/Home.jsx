import { Link } from "react-router-dom";

export default function Home(props) {
  /**
   * Handles the submission of the input form. Prevents the default form behavior
   * and adds the new note to the state.
   * @param {React.FormEvent<HTMLFormElement>} formData The form data from the
   * input form.
   */
  function addNote(formData) {
    formData.preventDefault();
    // always access formData elements with the name attribute, "note" in this case
    const value = formData.target.note.value.trim();
    if (value) {
      props.addNotes((prev) => [...prev, value]);
    }
    formData.target.reset();
  }

  return (
    <div>
      <nav>
        <Link to={"/notes"}>Notes</Link>
        <Link to={"/user"}>User</Link>
      </nav>
      <h1>Create a new note below!</h1>
      <form onSubmit={addNote}>
        <label htmlFor="note">New Note</label>
        <input type="text" name="note" id="note" />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}
