import './App.css';
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import notes from "./notes.js";

function App() {
  return (
    <div>
    <Header />
  {notes.map(note = {
    <Note
      key={note.key}
      noteTitle={note.title}
      noteContent={note.content}
       />
    })}
    <Note  />

    <Footer />

    </div>

  );
}

export default App;
