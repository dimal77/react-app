import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <div className = "Body">
        <h1>
          <ItemListContainer saludo="Hola Mundo"></ItemListContainer>
        </h1>
      </div>
    </div>
  );
}

export default App;
