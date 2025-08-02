import { Link } from "react-router-dom";

export default function Notes() {
  return (
    <div>
      <nav>
        <Link to={"/"}>
          <a href="">Home</a>
        </Link>
        <Link to={"/user"}>
          <a href="">User</a>
        </Link>
      </nav>
      <h1>This is the notes page</h1>
    </div>
  );
}
