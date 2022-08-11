import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="Body">
        <ItemListContainer/>
        <ItemDetailContainer item={0}/>
      </div>
    </div>
  );
}

export default App;
