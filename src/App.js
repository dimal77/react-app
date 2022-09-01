import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListCategoria from "./components/ItemListCategoria";
import { CartProvider } from "./components/store/cartContext";
import CartContainer from "./components/CartContainer";
import firestoredb from "./services/firebase";
import { saveProductsToFirebase } from "./services/firebase";

function App() {
  console.log(firestoredb);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <button onClick={saveProductsToFirebase}>Enviar Datos</button> */}
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
