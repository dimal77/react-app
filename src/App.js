import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListCategoria from "./components/ItemListCategoria";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListCategoria />}/>
          <Route path="/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404: No encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
