import { Route, Routes } from "react-router";

import { Navbar } from "./components/Navbar";
import { CatalogPage } from "./pages/CatalogPage";
import { DetailPage } from "./pages/DetailPage";
import { CartPage } from "./pages/CartPage";

import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<CatalogPage />}></Route>
        <Route path="/product/:productId" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
