import './App.css';
import UserInterface from './components/UserInterface.js'

import StylesContext from './components/StylesContext';

function App() {
  const styleButton ={
    background: "#1ECD97",
    display: "inline-block", 
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 15
  }

  return (
    <main>
     <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
    </main>
  );
}
export default App;
