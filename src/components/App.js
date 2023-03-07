import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { notes } from "../notes.js";

const createNotes = (noteEntry) => {
  return (
    <Note
      key={noteEntry.id}
      title={noteEntry.title}
      content={noteEntry.content}
    />
  );
};
function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
