import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Carta";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./contexts/CartContext";

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
            <Route index element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={
                <div style={{ backgroundColor: "red" }}>
                  {" "}
                  ERROR 404 NOT FOUND
                </div>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
 );
}

export default App;

