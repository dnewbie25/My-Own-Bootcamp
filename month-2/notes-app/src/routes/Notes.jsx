import { Link } from "react-router-dom";

export default function Notes(props) {
  console.log(props);

  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/user"}>User</Link>
      </nav>
      <h1>This is the notes page</h1>
      <ul>
        {props.notesArray.map((note) => (
          <li key={crypto.randomUUID()}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
