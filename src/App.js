import './App.css';
import Header from "./components/Header"
var d = new Date();

function App() {
  return (
    <div>
    <Header />
    
      <footer className= "App-footer">copyright {d.getFullYear()} </footer>

  
    </div>
    
  );
}

export default App;
