import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CartContext";
import Cart from "./components/Item/Cart";
import Checkout from "./components/Item/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <Route
              path="/category/:categories"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <div className="p-12 text-center">
                  <h1 className="text-3xl">404</h1>
                  <p>NOT FOUND</p>
                  <br />
                  <Link
                    to="/"
                    className="Option text-center py-4 px-8 bg-gray-900 text-white rounded-full"
                  >
                    Ver los productos
                  </Link>
                </div>
              }
            />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CarritoProvider>
        <ToastContainer theme="colored"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
