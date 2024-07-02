import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./pages/Collections";
import ErrorPage from "./pages/ErrorPage";

import { useState, createContext } from "react";

export const ShopContext = createContext({
  carts: [],
  addToCart: () => {},
  handleRemove: () => {}
});

function App() {
  const [carts, setCarts] = useState([]);
  


  const addToCart = (newProduct) => {
    // Check if the product is already in the cart
    const checkProductInCart = carts.find(
      (product) => product.id === newProduct.id
    );
    if (checkProductInCart) {
      alert("Item already in cart");
    } else {
      // If the product is not in the cart, add it
      setCarts([...carts, newProduct]);
    }
  };



  const handleRemove = (productId) => {
    setCarts((prevCarts) => prevCarts.filter((product) => product.id !== productId));
  };



  return (
    <ShopContext.Provider value={{ carts, addToCart, handleRemove }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/productpage" element={<ProductPage />} />
          <Route path="/pages/product/:id" element={<Product />} />
          <Route path="/pages/collections" element={<Collections />} />
          <Route path="/pages/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ShopContext.Provider>
  );
}

export default App;
