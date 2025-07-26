import { Routes, Route, Link } from "react-router";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Mi Router</h1>
      <Navigation />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </main>
  );
}

function Navigation() {
  return (
    <nav style={{ borderBottom: "1px solid", paddingBottom: "1rem" }}>
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default App;
