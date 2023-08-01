import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CartContext";
import Cart from "./components/Item/Cart";

function App() {
  return (
    <div className="App bg-slate-50">
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos"} />}
          />
          <Route path="/category/:categories" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
