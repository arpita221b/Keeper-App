import './App.css';
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";


function App() {
  return (
    <div>
    <Header />
    <CreateArea />
    <Note key={1} title="Note title" content="Note content" />

    <Footer />

    </div>

  );
}

export default App;
