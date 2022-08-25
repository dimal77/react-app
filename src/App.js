import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListCategoria from "./components/ItemListCategoria";
import { CartProvider } from "./components/store/cartContext";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListCategoria />}
            />
            <Route path="/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404: No encontrado</h1>} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
