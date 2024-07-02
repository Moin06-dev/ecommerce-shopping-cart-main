import { createContext } from "react";

const ShopContext = createContext({
  carts: [],
  addToCart: () => {},
  handleRemove: () => {}
});

export default ShopContext;
