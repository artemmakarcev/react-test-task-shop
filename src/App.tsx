import { Route, Routes } from "react-router";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { ShoppingCart } from "./pages/ShoppingCart";

import { CartProvider } from './context/CartContext';

import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:productId" element={<Detail />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
