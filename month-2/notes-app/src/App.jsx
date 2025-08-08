import "./App.css";
import { useEffect, useState } from "react";
import Home from "./routes/Home.jsx";
import Notes from "./routes/Notes.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./routes/NotFoundPage.jsx";
function App() {
  // creates a state but checks if there is a localStorage copy saved
  const [notesArray, setNotesArray] = useState(() => {
    const savedNotes = localStorage.getItem("notesArray");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  // the useEffect saves the notesArray everytime there is a change
  useEffect(() => {
    localStorage.setItem("notesArray", JSON.stringify(notesArray));
  }, [notesArray]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home addNotes={setNotesArray} />} />
        <Route path="/notes" element={<Notes notesArray={notesArray} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
