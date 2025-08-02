import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <nav>
        <Link to={"/notes"}>
          <a href="">Notes</a>
        </Link>
        <Link to={"/"}>
          <a href="">Home</a>
        </Link>
      </nav>
      <h1>This is the user page</h1>
    </div>
  );
}
