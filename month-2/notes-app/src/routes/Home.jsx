import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to={"/notes"}>
          <a href="">Notes</a>
        </Link>
        <Link to={"/user"}>
          <a href="">User</a>
        </Link>
      </nav>
      <h1>This is the home page</h1>
    </div>
  );
}
