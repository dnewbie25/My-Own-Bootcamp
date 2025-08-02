import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <nav>
        <Link to={"/"} style={{ margin: "0 1rem" }}>
          Home
        </Link>
        <Link to={"/notes"} style={{ margin: "0 1rem" }}>
          Notes
        </Link>
        <Link to={"/user"} style={{ margin: "0 1rem" }}>
          User
        </Link>
      </nav>
    </div>
  );
}
