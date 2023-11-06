import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import OverviewProducts from "./pages/Products";

import ProductDetail from "./pages/productDetails/ProductDetail";
import Carts from "./pages/Carts";
import CartDetails from "./pages/cartDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/carts" element={<Carts />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />} /> 
        <Route path="/cart-dets" element={<CartDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
