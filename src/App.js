import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";


function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote){
    setNotes(prevNotes => [...prevNotes, newNote]  );

  }
  return (
    <div>
    <Header />
    <CreateArea
    onAdd = {addNote}   />
  {notes.map(noteItem => { return  <Note title={noteItem.title} content={noteItem.content} /> } ) }


    <Footer />

    </div>

  );
}

export default App;
