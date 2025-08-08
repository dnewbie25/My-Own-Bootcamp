import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <nav>
        <Link to={"/notes"}>Notes</Link>
        <Link to={"/"}>Home</Link>
      </nav>
      <h1>This is the user page</h1>
    </div>
  );
}
