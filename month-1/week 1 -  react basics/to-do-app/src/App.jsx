import "./App.css";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

function App() {
  return (
    <main>
      <h1>Easy To-Do App</h1>
      <Input />
      <section id="tasks">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </section>
    </main>
  );
}

export default App;
